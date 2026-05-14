const { listGalleryPhotos, parseMultipart, readBody, saveBlobImage } = require("./_lib");

module.exports = async function handler(request, response) {
    if (request.method === "GET") {
        response.status(200).json(await listGalleryPhotos());
        return;
    }

    if (request.method === "POST") {
        try {
            const body = await readBody(request);
            const parsed = parseMultipart(body, request.headers["content-type"] || "");
            const file = parsed.files.find((item) => item.field === "photo");
            const blob = await saveBlobImage(file);
            response.status(201).json({
                id: blob.pathname,
                src: blob.url,
                createdAt: new Date().toISOString()
            });
        } catch (error) {
            response.status(400).json({ error: "Не вдалося зберегти фото" });
        }
        return;
    }

    response.setHeader("Allow", "GET, POST");
    response.status(405).json({ error: "Method not allowed" });
};

module.exports.config = {
    api: {
        bodyParser: false
    }
};
