const fs = require('fs');

let files = process.argv.slice(2);

let nameStr = `'use strict'
let arr = ['Sam','Tad','Mark'];

arr.forEach(name => {
  console.log(name);
});`


function buffAppend(str){
    var buf = Buffer.alloc(str.length);
    buf.fill(str);
    return str;
}
console.log(buffAppend(nameStr))


fs.writeFile('loop.js', buffAppend(nameStr), function (err) {
    if (err) throw err;
  })


 