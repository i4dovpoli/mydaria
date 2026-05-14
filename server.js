const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const port = process.env.PORT || 3000;
const uploadRoot = process.env.UPLOAD_DIR || path.join(root, "uploads");
const galleryDir = path.join(uploadRoot, "gallery");
const dataDir = path.join(uploadRoot, "data");
const photosFile = path.join(dataDir, "photos.json");
const diaryFile = path.join(dataDir, "diary.json");

const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg+xml"
};

fs.mkdirSync(galleryDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

function sendJson(response, status, payload) {
    response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify(payload));
}

function readJson(filePath, fallback) {
    try {
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (error) {
        return fallback;
    }
}

function writeJson(filePath, payload) {
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
}

function readBody(request) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;

        request.on("data", (chunk) => {
            size += chunk.length;
            if (size > 15 * 1024 * 1024) {
                request.destroy();
                reject(new Error("File is too large"));
                return;
            }
            chunks.push(chunk);
        });

        request.on("end", () => resolve(Buffer.concat(chunks)));
        request.on("error", reject);
    });
}

function parseMultipart(body, contentType) {
    const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
    if (!boundaryMatch) return { fields: {}, files: [] };

    const boundary = Buffer.from(`--${boundaryMatch[1] || boundaryMatch[2]}`);
    const fields = {};
    const files = [];
    let start = body.indexOf(boundary);

    while (start !== -1) {
        start += boundary.length;
        if (body[start] === 45 && body[start + 1] === 45) break;
        if (body[start] === 13 && body[start + 1] === 10) start += 2;

        const headerEnd = body.indexOf(Buffer.from("\r\n\r\n"), start);
        if (headerEnd === -1) break;

        const headers = body.slice(start, headerEnd).toString("utf8");
        const nextBoundary = body.indexOf(boundary, headerEnd + 4);
        if (nextBoundary === -1) break;

        let value = body.slice(headerEnd + 4, nextBoundary);
        if (value.length >= 2 && value[value.length - 2] === 13 && value[value.length - 1] === 10) {
            value = value.slice(0, -2);
        }

        const nameMatch = headers.match(/name="([^"]+)"/);
        const fileMatch = headers.match(/filename="([^"]*)"/);
        const typeMatch = headers.match(/Content-Type:\s*([^\r\n]+)/i);

        if (nameMatch && fileMatch && fileMatch[1]) {
            files.push({
                field: nameMatch[1],
                filename: path.basename(fileMatch[1]),
                contentType: typeMatch ? typeMatch[1].trim() : "application/octet-stream",
                data: value
            });
        } else if (nameMatch) {
            fields[nameMatch[1]] = value.toString("utf8");
        }

        start = nextBoundary;
    }

    return { fields, files };
}

function saveImage(file) {
    const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
    if (!file || !allowed.has(file.contentType)) {
        throw new Error("Unsupported file type");
    }

    const extensionByType = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
        "image/gif": ".gif"
    };
    const extension = extensionByType[file.contentType] || path.extname(file.filename).toLowerCase() || ".jpg";
    const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${extension}`;
    const filePath = path.join(galleryDir, filename);

    fs.writeFileSync(filePath, file.data);
    return `/uploads/gallery/${filename}`;
}

async function handleUploadPhoto(request, response) {
    try {
        const body = await readBody(request);
        const parsed = parseMultipart(body, request.headers["content-type"] || "");
        const imageFile = parsed.files.find((file) => file.field === "photo");
        const src = saveImage(imageFile);
        const photos = readJson(photosFile, []);
        const photo = { id: crypto.randomUUID(), src, createdAt: new Date().toISOString() };

        photos.unshift(photo);
        writeJson(photosFile, photos);
        sendJson(response, 201, photo);
    } catch (error) {
        sendJson(response, 400, { error: "Не вдалося зберегти фото" });
    }
}

async function handleCreateDiary(request, response) {
    try {
        const body = await readBody(request);
        const parsed = parseMultipart(body, request.headers["content-type"] || "");
        const text = (parsed.fields.text || "").trim();
        const imageFile = parsed.files.find((file) => file.field === "photo");
        const photo = imageFile ? saveImage(imageFile) : "";

        if (!text) {
            sendJson(response, 400, { error: "Порожній спогад" });
            return;
        }

        if (photo) {
            const photos = readJson(photosFile, []);
            photos.unshift({ id: crypto.randomUUID(), src: photo, createdAt: new Date().toISOString() });
            writeJson(photosFile, photos);
        }

        const entries = readJson(diaryFile, []);
        const entry = { id: crypto.randomUUID(), text, photo, createdAt: new Date().toISOString() };
        entries.unshift(entry);
        writeJson(diaryFile, entries);
        sendJson(response, 201, entry);
    } catch (error) {
        sendJson(response, 400, { error: "Не вдалося зберегти спогад" });
    }
}

function serveStatic(request, response) {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    let requestedPath = decodeURIComponent(requestUrl.pathname);

    if (requestedPath === "/") requestedPath = "/index.html";

    const baseDir = requestedPath.startsWith("/uploads/") ? uploadRoot : root;
    const relativePath = requestedPath.startsWith("/uploads/")
        ? requestedPath.replace("/uploads/", "")
        : requestedPath.slice(1);
    const filePath = path.resolve(baseDir, relativePath);

    if (!filePath.startsWith(path.resolve(baseDir))) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.end("Not found");
            return;
        }

        response.writeHead(200, {
            "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
            "Cache-Control": requestedPath.startsWith("/uploads/") ? "public, max-age=31536000, immutable" : "no-cache"
        });
        response.end(data);
    });
}

const server = http.createServer(async (request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "GET" && requestUrl.pathname === "/api/photos") {
        sendJson(response, 200, readJson(photosFile, []));
        return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/photos") {
        await handleUploadPhoto(request, response);
        return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/diary") {
        sendJson(response, 200, readJson(diaryFile, []));
        return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/diary") {
        await handleCreateDiary(request, response);
        return;
    }

    if (request.method === "DELETE" && requestUrl.pathname.startsWith("/api/diary/")) {
        const entryId = decodeURIComponent(requestUrl.pathname.replace("/api/diary/", ""));
        const entries = readJson(diaryFile, []);
        writeJson(diaryFile, entries.filter((entry) => entry.id !== entryId));
        sendJson(response, 200, { ok: true });
        return;
    }

    serveStatic(request, response);
});

server.listen(port, () => {
    console.log(`Mydaria site is running on port ${port}`);
});
