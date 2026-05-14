const crypto = require("crypto");
const { put, list, del } = require("@vercel/blob");

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
                filename: fileMatch[1],
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

function imageExtension(contentType, filename = "") {
    const extensions = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
        "image/gif": ".gif"
    };
    return extensions[contentType] || filename.match(/\.[a-z0-9]+$/i)?.[0] || ".jpg";
}

async function saveBlobImage(file) {
    const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
    if (!file || !allowed.has(file.contentType)) {
        throw new Error("Unsupported image");
    }

    const pathname = `gallery/${Date.now()}-${crypto.randomBytes(6).toString("hex")}${imageExtension(file.contentType, file.filename)}`;
    const blob = await put(pathname, file.data, {
        access: "public",
        contentType: file.contentType
    });

    return blob;
}

async function listGalleryPhotos() {
    const result = await list({ prefix: "gallery/" });
    return result.blobs
        .map((blob) => ({
            id: blob.pathname,
            src: blob.url,
            createdAt: blob.uploadedAt || new Date().toISOString()
        }))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function listDiaryEntries() {
    const result = await list({ prefix: "diary/" });
    const entries = await Promise.all(
        result.blobs
            .filter((blob) => blob.pathname.endsWith(".json"))
            .map(async (blob) => {
                const response = await fetch(blob.url);
                return response.json();
            })
    );

    return entries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

module.exports = {
    del,
    listDiaryEntries,
    listGalleryPhotos,
    parseMultipart,
    put,
    readBody,
    saveBlobImage
};
