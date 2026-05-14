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

## Vercel

Vercel can deploy this repo directly from GitHub.

For uploads and diary persistence on Vercel, use Vercel Blob:

1. Create/import the GitHub project in Vercel.
2. Add Vercel Blob storage to the project.
3. Make sure `BLOB_READ_WRITE_TOKEN` is available in the project's Environment Variables.
4. Deploy.

The `/api/photos` and `/api/diary` routes use Vercel Blob when the site runs on Vercel.

Important: Vercel Functions have a read-only filesystem, so uploads cannot be saved into a normal project folder there. Blob storage is the persistent storage layer for Vercel deployments.
