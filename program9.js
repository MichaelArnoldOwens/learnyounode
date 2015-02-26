
var http = require("http");

var request = require("request");

var dict = {}
  dict[process.argv[2]] = "";
  dict[process.argv[3]] = "";
  dict[process.argv[4]] = "";

var count = 0;

function getPage(url){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      dict[url] = body;
      count++;
      if(count == 3) {
        console.log(dict[process.argv[2]]);
        console.log(dict[process.argv[3]]);
        console.log(dict[process.argv[4]]);
      }
    }
  })
}

getPage(process.argv[2])
getPage(process.argv[3])
getPage(process.argv[4])
