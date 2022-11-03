const fs = require('fs');

// //Synchronous way of file reading.
// //reading from a file
// const textInp = fs.readFileSync('./txt/inp.txt','utf-8');
// console.log(textInp);
// //writing into a file
// const textOut = `Avengers are extremely powerful.\n Created on:${new Date()}`;
// fs.writeFileSync('./txt/out.txt',textOut);

//Asynchronous way of files
//reading from a file
fs.readFile('./txt/inp.txt','utf-8',(err,data) => {
    console.log(data);
})
console.log('this will read file');
//writing into a file
fs.appendFile('./txt/inp.txt','\nthis is newtext','utf-8',(err) => {
    if(err) throw err;
})


