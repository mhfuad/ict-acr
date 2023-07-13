const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const { SOCKET_PORT } = require('../config')

io.on('connection', (socket)=>{
	console.log('Connected', socket.id);










	socket.on('msg_from_client', (from,msg)=>{
		console.log('Message is '+from, msg);
	})
	socket.on('disconnect', (msg)=>{
		console.log('Disconnected');
	})
});

http.listen(SOCKET_PORT, ()=>{
	console.log('Listening to port 8001');
})


// let count = 0;
// setInterval(() =>{

// 	io.emit('msg_to_client','client','test msg');
// 	count++;
// },1000)
