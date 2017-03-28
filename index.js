var app = require('express')();
var ngrok = require('ngrok');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('card:selected', function(obj){
        io.emit('card:selected', obj);
    });

    socket.on('chat:message:typing', function(obj){
        io.emit('chat:message:typing', obj);
    });

    socket.on('chat:message:send', function(obj){
        io.emit('chat:message:send', obj);
    });
});

ngrok.connect(3000, function (err, url) {
    console.log('ngrok connected at ' + url);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
