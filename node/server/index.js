// import http module
import http from "http";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

// server to send json object
const serverJson = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(`{"name":"Amith", "age": 20}`);
});

//server to render html
const htmlServe = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World</h1>");
});

console.log(__dirname);

const htmlRender = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const filePath = join(__dirname, "index.html"); //capture the path of index.html
  console.log(filePath);
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
  res.end(data);
});

// listen on port 3000
server.listen(4000, () => {
  console.log(`Server running at http://localhost:4000`);
});

serverJson.listen(5000, () => {
  console.log(`Json Server running at http://localhost:5000`);
});

htmlServe.listen(8000, () => {
  console.log(`Html Server running at http://localhost:8000`);
});

htmlRender.listen(8080, () => {
  console.log(`Html Render Server running at http://localhost:8080`);
});
