# Deployment

This project is prepared for Render Web Service hosting.

`npm start` runs `server.js`, which:

- serves the site files;
- saves uploaded gallery photos to `uploads/gallery`;
- stores uploaded photo metadata in `uploads/data/photos.json`;
- stores diary entries in `uploads/data/diary.json`;
- serves uploaded files from `/uploads/...`.

## Render

Use the GitHub repository as a Render Web Service.

Do not create a Render Static Site for this project. Static hosting cannot save uploaded files.

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

## Render setup checklist

1. Create **New Web Service**.
2. Connect the GitHub repository.
3. Select branch `main`.
4. Use runtime `Node`.
5. Set build command to `npm install`.
6. Set start command to `npm start`.
7. Add a persistent disk:

```text
Mount path: /opt/render/project/src/uploads
Size: 1 GB
```

Without the disk, uploads may disappear after redeploys or restarts.
