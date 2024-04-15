import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method, url);

  return res.end("Hello, World!");
})

server.listen(3333)