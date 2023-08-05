const http = require("http");

const hostname = "localhost";
const port = 8000;

// Return “Hello world” from the response
const requestListener = function (request, response) {
  response.writeHead(200); // Status code 200 = OK
  response.write("Hello World");
  response.end();
};

// Create an http server
const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
