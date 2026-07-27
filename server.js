const fs = require("fs");
const https = require("https");
const path = require("path");
const { execSync } = require("child_process");

const PORT = Number(process.env.PORT) || 8443;
const HOST = process.env.HOST || "0.0.0.0";
const PUBLIC_DIR = path.join(__dirname, "public");
const CERT_DIR = path.join(__dirname, "certs");
const KEY_PATH = path.join(CERT_DIR, "key.pem");
const CERT_PATH = path.join(CERT_DIR, "cert.pem");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function ensureCertificates() {
  if (fs.existsSync(KEY_PATH) && fs.existsSync(CERT_PATH)) {
    return;
  }

  fs.mkdirSync(CERT_DIR, { recursive: true });
  execSync(
    [
      "openssl req -x509 -newkey rsa:2048 -nodes",
      `-keyout "${KEY_PATH}"`,
      `-out "${CERT_PATH}"`,
      "-days 365",
      '-subj "/CN=localhost"',
    ].join(" "),
    { stdio: "ignore" }
  );
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
}

ensureCertificates();

const server = https.createServer(
  {
    key: fs.readFileSync(KEY_PATH),
    cert: fs.readFileSync(CERT_PATH),
  },
  (req, res) => {
    const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const safePath = path
      .normalize(requestPath)
      .replace(/^(\.\.[/\\])+/, "")
      .replace(/^[/\\]+/, "");
    const resolved = path.join(
      PUBLIC_DIR,
      safePath === "" || safePath === "." ? "index.html" : safePath
    );

    if (!resolved.startsWith(PUBLIC_DIR)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    fs.stat(resolved, (error, stats) => {
      if (!error && stats.isDirectory()) {
        sendFile(res, path.join(resolved, "index.html"));
        return;
      }

      if (!error && stats.isFile()) {
        sendFile(res, resolved);
        return;
      }

      sendFile(res, path.join(PUBLIC_DIR, "index.html"));
    });
  }
);

server.listen(PORT, HOST, () => {
  console.log(`Profesional Firestop LLC page ready`);
  console.log(`  Local:   https://localhost:${PORT}`);
  console.log(`  Network: https://<your-ip>:${PORT}`);
  console.log(`Open on PC or mobile (accept the self-signed cert warning).`);
});
