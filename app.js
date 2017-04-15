var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

http.listen(function () {
   console.log('listening on port %s', port)
});


app.get('/', function (req, res) {
   res.send('Hi, I\'m Kyle');
});

var bot = require("./app/module/actions");



