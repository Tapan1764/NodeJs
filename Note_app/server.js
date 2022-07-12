const fs = require('fs');

const writeAppend = function(){
    console.log('writing and appending to file');
    fs.writeFileSync('notepad.txt','Basics of Node Js and React.');
    fs.appendFileSync('notepad.txt',' Welcome to Marwadi University.')    
}
module.exports = writeAppend