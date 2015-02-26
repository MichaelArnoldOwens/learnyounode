var readDir = require('./module');

var args = process.argv.slice(2);
var dir = args[0];
var filter = args[1];

readDir(dir, filter, function (err, list) {
    list.forEach(function (i) {
        console.log(i);
    });
});