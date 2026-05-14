const crypto = require("crypto");
const { listDiaryEntries, parseMultipart, put, readBody, saveBlobImage } = require("./_lib");

module.exports = async function handler(request, response) {
    if (request.method === "GET") {
        response.status(200).json(await listDiaryEntries());
        return;
    }

    if (request.method === "POST") {
        try {
            const body = await readBody(request);
            const parsed = parseMultipart(body, request.headers["content-type"] || "");
            const text = (parsed.fields.text || "").trim();
            const file = parsed.files.find((item) => item.field === "photo");

            if (!text) {
                response.status(400).json({ error: "Порожній спогад" });
                return;
            }

            const photoBlob = file ? await saveBlobImage(file) : null;
            const entry = {
                id: crypto.randomUUID(),
                text,
                photo: photoBlob ? photoBlob.url : "",
                diaryPathname: "",
                createdAt: new Date().toISOString()
            };

            entry.diaryPathname = `diary/${entry.id}.json`;
            await put(entry.diaryPathname, JSON.stringify(entry), {
                access: "public",
                contentType: "application/json"
            });

            response.status(201).json(entry);
        } catch (error) {
            response.status(400).json({ error: "Не вдалося зберегти спогад" });
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
