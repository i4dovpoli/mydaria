const { del, listDiaryEntries } = require("../_lib");

module.exports = async function handler(request, response) {
    if (request.method !== "DELETE") {
        response.setHeader("Allow", "DELETE");
        response.status(405).json({ error: "Method not allowed" });
        return;
    }

    const entryId = request.query.id;
    const entries = await listDiaryEntries();
    const entry = entries.find((item) => item.id === entryId);

    if (entry?.diaryPathname) {
        await del(entry.diaryPathname);
    }

    response.status(200).json({ ok: true });
};
