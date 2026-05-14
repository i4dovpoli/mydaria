# Deployment

This project is prepared for Render Web Service hosting.

`npm start` runs `server.js`, which:

- serves the site files;
- saves uploaded gallery photos to `uploads/gallery`;
- stores uploaded photo metadata in `uploads/data/photos.json`;
- stores diary entries in `uploads/data/diary.json`;
- serves uploaded files from `/uploads/...`.
- can also sync uploaded photos and diary data into the GitHub repository folder `spogady/`.

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

## GitHub backup sync

To also save memories in GitHub, add these Render environment variables:

```text
GITHUB_SYNC_TOKEN=your_github_fine_grained_token
GITHUB_SYNC_OWNER=i4dovpoli
GITHUB_SYNC_REPO=mydaria
GITHUB_SYNC_BRANCH=main
GITHUB_SYNC_FOLDER=spogady
```

The token needs repository **Contents: Read and write** permission.

When enabled:

- uploaded photos are committed to `spogady/photos`;
- photo metadata is committed to `spogady/photos.json`;
- diary memories are committed to `spogady/diary.json`;
- if the Render disk is empty, the server can still read the committed backup from `spogady`.

If Render auto-deploy is enabled, every GitHub backup commit can trigger a redeploy. This is safe, but noisier. You can disable auto-deploy in Render and deploy manually when changing code.
