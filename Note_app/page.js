const http = require('http');
const fs = require('fs');
const { title } = require('process');

http.createServer(function (req, res) {
  // fs.open('mynewfile5.txt', 'w', function (err, file) {
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
  // fs.appendFile('notepad.txt', ' MU', function (err) {
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
  // fs.rename('mynewfile5.txt', 'notepad2.txt', function (err) {
  //   if (err) {
  //             throw err;}
  //           else{
  //             res.writeHead(200, {'Content-Type': 'text/html'});
  //             res.write('File renamed');
  //             return res.end();}
  // });
  
}).listen(8000);