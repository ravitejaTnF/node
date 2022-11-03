const url = require('url');
const http = require('http');
const PORT = 8000;

const server = http.createServer((req,res) => {
    const path = req.url;
    if(path == '/'){
        res.end('this is home');
    }else if(path == '/overview'){
        res.end('this is overview');
    }else if(path == '/products'){
        res.end('this is product');
    }else{
        res.writeHead(404,{'Content-type': 'text/html'});
        res.end('<h1>unknown route</h1>')
    }
})

server.listen(PORT,() => {
    console.log('server has started');
})