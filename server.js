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
const githubBackupDir = path.join(root, "spogady");
const githubPhotosFile = path.join(githubBackupDir, "photos.json");
const githubDiaryFile = path.join(githubBackupDir, "diary.json");
const githubSync = {
    token: process.env.GITHUB_SYNC_TOKEN || "",
    owner: process.env.GITHUB_SYNC_OWNER || "i4dovpoli",
    repo: process.env.GITHUB_SYNC_REPO || "mydaria",
    branch: process.env.GITHUB_SYNC_BRANCH || "main",
    folder: process.env.GITHUB_SYNC_FOLDER || "spogady"
};

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
fs.mkdirSync(path.join(githubBackupDir, "photos"), { recursive: true });

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

function mergeById(primary, fallback) {
    const merged = [...primary];
    fallback.forEach((item) => {
        if (!merged.some((savedItem) => savedItem.id === item.id)) {
            merged.push(item);
        }
    });
    return merged;
}

function getPhotos() {
    return mergeById(readJson(photosFile, []), readJson(githubPhotosFile, []));
}

function getDiaryEntries() {
    return mergeById(readJson(diaryFile, []), readJson(githubDiaryFile, []));
}

function toGithubPhotoSrc(src) {
    if (!src || !src.startsWith("/uploads/gallery/")) return src;
    return `/${githubSync.folder}/photos/${path.basename(src)}`;
}

function toGithubPhotos(photos) {
    return photos.map((photo) => ({
        ...photo,
        src: toGithubPhotoSrc(photo.src)
    }));
}

function toGithubDiaryEntries(entries) {
    return entries.map((entry) => ({
        ...entry,
        photo: toGithubPhotoSrc(entry.photo)
    }));
}

function githubSyncEnabled() {
    return Boolean(githubSync.token && githubSync.owner && githubSync.repo && githubSync.branch);
}

function githubApiPath(filePath) {
    return filePath.split("/").map(encodeURIComponent).join("/");
}

async function githubRequest(method, filePath, payload) {
    const url = `https://api.github.com/repos/${githubSync.owner}/${githubSync.repo}/contents/${githubApiPath(filePath)}`;
    const response = await fetch(url, {
        method,
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${githubSync.token}`,
            "Content-Type": "application/json",
            "X-GitHub-Api-Version": "2022-11-28"
        },
        body: payload ? JSON.stringify(payload) : undefined
    });

    if (response.status === 404) return null;
    if (!response.ok) {
        throw new Error(`GitHub API failed: ${response.status}`);
    }

    return response.json();
}

async function getGithubSha(filePath) {
    const url = `https://api.github.com/repos/${githubSync.owner}/${githubSync.repo}/contents/${githubApiPath(filePath)}?ref=${encodeURIComponent(githubSync.branch)}`;
    const response = await fetch(url, {
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${githubSync.token}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    if (response.status === 404) return null;
    if (!response.ok) {
        throw new Error(`GitHub API failed: ${response.status}`);
    }

    const existingFile = await response.json();
    return existingFile?.sha || null;
}

async function putGithubFile(filePath, content, message) {
    if (!githubSyncEnabled()) return false;

    try {
        const sha = await getGithubSha(filePath);
        const payload = {
            message,
            branch: githubSync.branch,
            content: Buffer.isBuffer(content)
                ? content.toString("base64")
                : Buffer.from(content, "utf8").toString("base64")
        };

        if (sha) payload.sha = sha;
        await githubRequest("PUT", filePath, payload);
        return true;
    } catch (error) {
        console.error("GitHub sync failed:", error.message);
        return false;
    }
}

async function syncGithubBackup({ imageFile, imageFilename, photos, diaryEntries }) {
    if (!githubSyncEnabled()) return false;

    if (imageFile && imageFilename) {
        await putGithubFile(
            `${githubSync.folder}/photos/${imageFilename}`,
            imageFile.data,
            `Add memory photo ${imageFilename}`
        );
    }

    if (photos) {
        await putGithubFile(
            `${githubSync.folder}/photos.json`,
            JSON.stringify(toGithubPhotos(photos), null, 2),
            "Update saved photos"
        );
    }

    if (diaryEntries) {
        await putGithubFile(
            `${githubSync.folder}/diary.json`,
            JSON.stringify(toGithubDiaryEntries(diaryEntries), null, 2),
            "Update diary memories"
        );
    }

    return true;
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
    return { src: `/uploads/gallery/${filename}`, filename };
}

async function handleUploadPhoto(request, response) {
    try {
        const body = await readBody(request);
        const parsed = parseMultipart(body, request.headers["content-type"] || "");
        const imageFile = parsed.files.find((file) => file.field === "photo");
        const savedImage = saveImage(imageFile);
        const photos = getPhotos();
        const photo = { id: crypto.randomUUID(), src: savedImage.src, createdAt: new Date().toISOString() };

        photos.unshift(photo);
        writeJson(photosFile, photos);
        const gitSynced = await syncGithubBackup({
            imageFile,
            imageFilename: savedImage.filename,
            photos
        });
        sendJson(response, 201, { ...photo, gitSynced });
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
        const savedImage = imageFile ? saveImage(imageFile) : null;
        const photo = savedImage ? savedImage.src : "";

        if (!text) {
            sendJson(response, 400, { error: "Порожній спогад" });
            return;
        }

        if (photo) {
            const photos = getPhotos();
            photos.unshift({ id: crypto.randomUUID(), src: photo, createdAt: new Date().toISOString() });
            writeJson(photosFile, photos);
        }

        const entries = getDiaryEntries();
        const entry = { id: crypto.randomUUID(), text, photo, createdAt: new Date().toISOString() };
        entries.unshift(entry);
        writeJson(diaryFile, entries);
        const gitSynced = await syncGithubBackup({
            imageFile,
            imageFilename: savedImage?.filename,
            photos: getPhotos(),
            diaryEntries: entries
        });
        sendJson(response, 201, { ...entry, gitSynced });
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
        sendJson(response, 200, getPhotos());
        return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/health") {
        sendJson(response, 200, { ok: true });
        return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/photos") {
        await handleUploadPhoto(request, response);
        return;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/diary") {
        sendJson(response, 200, getDiaryEntries());
        return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/diary") {
        await handleCreateDiary(request, response);
        return;
    }

    if (request.method === "DELETE" && requestUrl.pathname.startsWith("/api/diary/")) {
        const entryId = decodeURIComponent(requestUrl.pathname.replace("/api/diary/", ""));
        const entries = getDiaryEntries().filter((entry) => entry.id !== entryId);
        writeJson(diaryFile, entries);
        await syncGithubBackup({ diaryEntries: entries });
        sendJson(response, 200, { ok: true });
        return;
    }

    serveStatic(request, response);
});

server.listen(port, () => {
    console.log(`Mydaria site is running on port ${port}`);
});
