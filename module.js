var fs = require("fs");

module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function(err,list){
    
    if (err)
      return cb(err);
    
    ext = "." + ext;

    var files = list.filter(function (arr) {
      return arr.indexOf(ext) !== -1;
    });
    cb(null, files);
  });
};