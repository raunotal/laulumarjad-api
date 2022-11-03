const http = require("http");

const hostname = "127.0.0.1";
const port = 3007;

const server = http.createServer((req, res) => {
  if (req.url === "/redirect/shop") {
    res.writeHead(302, { Location: "https://www.laulumarjad.ee" });
    return res.end();
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Laulumarjad");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(new Date());
  console.log("=============================================");
});
