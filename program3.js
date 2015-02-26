var fs = require("fs");
// console.log(process.argv);
var file = process.argv;
// console.log(file[2]);
var buf = fs.readFileSync(file[2]);
//console.log(buf);
var str = buf.toString();
//console.log(str);
var split = str.split('\n');
// console.log(split);
var answer = split.length-1
console.log(answer);