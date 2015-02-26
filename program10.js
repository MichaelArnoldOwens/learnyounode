var net = require('net');
var date = new Date();

var server = net.createServer(function (socket) {
        // socket handling logic
        var year = date.getFullYear();
        // console.log("year = " + year);

        var month = date.getMonth() + 1;
        // console.log("month = " + month);
        if(month<10) {
            month = "0" + month;
        }

        var day = date.getDate();
        // console.log("day= " + day)
        if(day < 10) {
            day = "0" + day;
        }

        var hours = date.getHours();
        // console.log("hours = " + hours)
        if(hours < 10) {
            hours = "0" + hours;
        }

        var minutes = date.getMinutes();
        // console.log("minutes= " + minutes);
        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        var timeLine = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";

        socket.end(timeLine);
    });
server.listen(process.argv[2]);