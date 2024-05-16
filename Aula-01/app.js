const http = require('http');

const hostname = '127.0.0.1';
const port = 200;

/**
 * A comunicação WEB funciona:
 * 
 * Request: O client faz uma request;
 * Response: O server responde ao client/envia um response.
 */

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');

    const data = {
        name: "Maurício",
        age: 20,
    }

    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}) 