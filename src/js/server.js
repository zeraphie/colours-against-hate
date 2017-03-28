const port = 3000;

var express = require('express');
var app = express();
var path = require('path');
var ngrok = require('ngrok');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/../../public'));

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../../public', 'master.html'));
});

io.on('connection', function(socket){
    socket.on('cards:selected', function(obj){
        io.emit('cards:selected', obj);
    });

    socket.on('chat:message:typing', function(obj){
        io.emit('chat:message:typing', obj);
    });

    socket.on('chat:message:send', function(obj){
        io.emit('chat:message:send', obj);
    });
});

ngrok.connect(port, function (err, url) {
    console.log('ngrok connected at ' + url);
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
