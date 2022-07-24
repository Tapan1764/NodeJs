const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  // fs.open('mynewfile6.txt', 'w', function (err, file) {
  //   if (err) {
  //         throw err;}
  //       else{  
  //         res.writeHead(200, {'Content-Type': 'text/html'});
  //         res.write('File created');
  //         return res.end();}
  // });
  // fs.readFile('notepad.txt', function(err, data) {
  //   if(err){
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write('Error reading file...');
  //     return res.end();
  //   }else{
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //      res.write(data);
  //     return res.end();
  //   }
  // });
  fs.writeFileSync('newnote.txt', "Hello World");
  // fs.appendFile('notepad4.txt', ' ICT', function (err) {
  //   if (err) {
  //     throw err;}
  //   else{
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write('File edited');
  //     return res.end();}
  // });
  // fs.unlink('mynewfile3.txt', function (err) {
  //   if (err) {
  //         throw err;}
  //       else{
  //         res.writeHead(200, {'Content-Type': 'text/html'});
  //         res.write('File deleted');
  //         return res.end();}
  // });
  // fs.rename('notepad4.txt', 'newfile1.txt', function (err) {
  //   if (err) {
  //             throw err;}
  //           else{
  //             res.writeHead(200, {'Content-Type': 'text/html'});
  //             res.write('File renamed');
  //             return res.end();}
  // });
}).listen(8000);