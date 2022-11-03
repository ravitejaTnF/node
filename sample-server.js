const http = require('http');
const PORT = 8000;
const server = http.createServer((req,res) => {
    res.end('Hello from server');
})
server.listen(PORT,() =>{
    console.log(`server is running at port ${PORT}`);
})