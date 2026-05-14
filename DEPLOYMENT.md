# Deployment

This site can run in two modes:

1. Static hosting, such as GitHub Pages.
   - The gallery and diary UI work.
   - New photos can only be stored in the current browser with localStorage.
   - Files cannot be written into a folder from a static-only host.

2. Node hosting, such as Render Web Service.
   - `npm start` runs `server.js`.
   - Uploaded photos are saved to `uploads/gallery`.
   - Saved photo metadata is stored in `uploads/data/photos.json`.
   - Diary entries are stored in `uploads/data/diary.json`.

## Render

Use the GitHub repository as a Render Web Service.

Build command:

```bash
npm install
```

Start command:

```bash
npm start
```

For persistent uploads, attach a disk mounted at:

```text
/opt/render/project/src/uploads
```

The included `render.yaml` describes the same setup.
