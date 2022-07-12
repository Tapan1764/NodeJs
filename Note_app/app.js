const validator = require('validator');

const writeAndappend = require('./server.js')
writeAndappend()

console.log(validator.isEmail('ktapan176@gmail.com'));
console.log(validator.isEmail('tapan.khokhariya109229@marwadiuniversity.ac.in'));

console.log(process.argv);