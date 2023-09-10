// const express = require('express')
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// const events = require('events')
// const { Server } = require('socket.io');

// const io = new Server(server,{
// 	cors: {
// 		origin: "*",
// 	}
// });

// let likes = 0;
// const eventEmitter = new events.EventEmitter();

// setInterval(()=>{
// 	likes++;
// 	eventEmitter.emit("newdata");
// }, 2000);

// io.on("connection", (socket) => {
// 	socket.emit('likeupdate', likes);
	
// 	socket.on('liked', () => {
// 		likes++;
// 		socket.emit('likeupdate', likes);
// 		socket.broadcast.emit('likeupdate', likes)
// 	})
	
// 	eventEmitter.on('newdata', ()=>{
// 		socket.broadcast.emit('likeupdate', likes)
// 	})
// });
// app.get('/',(req, res)=>{
// 	res.send("Hello World")
// })

// server.listen(3000);

let likes = 0;
let live_users = new Map();


const sendNotification = (type, data) => {

	try{

		console.log(data)

		if(live_users.has(data.user)){
			(live_users.get(data.user)).emit('noti', data.message);
		}


	}catch(error){
		console.log(error);
	}

}

const ioInit = async(io)=> {
	try{

		const authSocketMiddleware = (socket , next) =>{

			
			try {
				const token = socket.handshake.headers.ulala;

				if(token != '111111'){
					throw "vul token nia kno asle beyadop"
				}
				socket.user = token;
				live_users.set(token, socket)
				next();

			} catch (err) {
				return next(new Error("NOT AUTHORIZED tata bye bye"));
			}
			
		}


		io.use((socket, next) => {
			authSocketMiddleware(socket, next);
		  });

		io.on("connection", (socket) => {
			
			socket.emit('likeupdate', "ulala");

			socket.on('liked', () => {
				likes++;
				socket.emit('likeupdate', likes);
				socket.broadcast.emit('likeupdate', likes) 
			})
		
			socket.on('user-connected', async (user_id) =>{
				live_users.set(user_id, socket.id);
				const notifications = await Notification.count({where: {userId: user_id, deletedAt: null, viewed:false}});
				console.log("Hello: ",notifications)
				socket.emit('notification', notifications)
				socket.user_id = user_id;
			})
		
			// myEmitter.on('form-submit', ( iro_id )=>{
			// 	console.log("iro id: "+ iro_id)
			// })
		
			socket.on('disconnect',()=>{
				live_users.delete(socket.user_id)
			})
		
			
		});
		
	}catch(error){
		console.log(error);
	}
}

setInterval(()=>{
console.log("User connected: ",live_users.size)
}, 2000)

module.exports = {
	ioInit : ioInit,
	sendNotification : sendNotification
}