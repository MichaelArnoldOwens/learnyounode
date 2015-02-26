
var http = require("http");

var request = require("request");

request(process.argv[2], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.length); // Show the HTML for the Google homepage. 
    console.log(body);
  }
})

// var arr = [];
// console.log(process.argv[2]);
// http.get(process.argv[2], function callback(response) {
//         response.setEncoding("utf8");
//         response.on("data", function(data){
//             arr.push(data);
//             console.log(arr.length);
//         });

//         response.on("finish", function(){
//             console.log("finish");
//             var str = arr.join();
//             console.log(str.length);
//         });

//         response.on("close", function(){
//             console.log("close");
//             var str = arr.join();
//             console.log(str.length);
//         });
// });