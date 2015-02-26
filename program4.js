var fs = require("fs");
var file = process.argv;
var buffer;
// console.log(file[2]);
fs.readFile(file[2], 'utf8', function callback (err,data){
  if(err) throw err;
  data = data.split('\n');
  console.log(data.length-1);
});