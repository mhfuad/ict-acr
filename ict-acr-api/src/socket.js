const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);

const events = require('events')
const { Server } = require('socket.io');

const io = new Server(server,{
	cors: {
		origin: "*",
	}
});

let likes = 0;
const eventEmitter = new events.EventEmitter();

setInterval(()=>{
	likes++;
	eventEmitter.emit("newdata");
}, 2000);

io.on("connection", (socket) => {
	socket.emit('likeupdate', likes);
	
	socket.on('liked', () => {
		likes++;
		socket.emit('likeupdate', likes);
		socket.broadcast.emit('likeupdate', likes)
	})
	
	eventEmitter.on('newdata', ()=>{
		socket.broadcast.emit('likeupdate', likes)
	})
});
app.get('/',(req, res)=>{
	res.send("Hello World")
})

server.listen(3000);