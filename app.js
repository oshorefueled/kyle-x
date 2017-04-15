var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer();

var bot = require("./app/module/actions");


var myArray = [3,5,1,2,5,3];


app.set(port);

server.listen(port);
server.on('listening', function () {
   console.log('listening on port %s', port);
});
server.on('error', function (err) {
    console.error(err);
});



