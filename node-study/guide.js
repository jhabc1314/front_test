const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req,res);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello,world\n');
});
const hostName = '127.0.0.1';
const port = 3001;
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`);
    console.log(module);
});

