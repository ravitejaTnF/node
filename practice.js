const fs = require('fs');
const http = require('http');
const url = require('url');
// //asynchronous
// //reading a file
// fs.readFile('./txt/inp.txt','utf-8',(err,data) => {
//     console.log(data);;
// })
// //writing a file
// fs.writeFile('./txt/newfile.txt','sending data to a new file',(err) => {
//     if(err) throw err;
// })

// //synchronous
// //reading
// const data = fs.readFileSync('./txt/inp.txt','utf-8');
// console.log(data);
// //writing
// const data1 = fs.writeFileSync('./txt/inp.txt','some data','utf-8');

//creating server
const PORT = 5000;
const server = http.createServer((req,res) => {
    const path = req.url;
    if(path == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<strong>Home</strong>');
    }else if(path == '/login'){
        res.end('login');
    }else if(path == '/cart'){
        res.end('cart');
    }else{
        res.end('404');
    }
})
server.listen(PORT,() => {
    console.log(`server is running at port ${PORT}`);
})