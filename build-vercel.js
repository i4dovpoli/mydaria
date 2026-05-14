const fs = require("fs");
const path = require("path");

const root = __dirname;
const publicDir = path.join(root, "public");
const files = ["index.html", "style.css", "script.js", "config.js"];

fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

for (const file of files) {
    fs.copyFileSync(path.join(root, file), path.join(publicDir, file));
}

fs.cpSync(path.join(root, "image"), path.join(publicDir, "image"), { recursive: true });
