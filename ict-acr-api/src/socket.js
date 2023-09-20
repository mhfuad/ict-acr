const { User, Notification } = require('../models');
let likes = 0;
let live_users = new Map();

const sendNotification = (type, data) => {
	try{
		if(live_users.has(data.user)){
			(live_users.get(data.user)).emit('noti', data.message);
			Notification.create({userId:data.user, message: data.message, viewed: 0, createdAt: new Date(), updatedAt: new Date()})
		}else{
			console.log("No user found in live user")
			Notification.create({userId:data.user, message: data.message, viewed: 0, createdAt: new Date(), updatedAt: new Date()})
		}
	}catch(error){
		console.log(error);
	}
}

const ioInit = async(io)=> {
	try{
		const authSocketMiddleware = async (socket , next) =>{
			
			try {
				const token = socket.handshake.headers.user_id;
				const user =await User.count({where:{idNo:token}})
				if(user == 1){
					socket.user = token;
					live_users.set(token, socket)
					next();
				}else{
					throw "User not found in database"
				}
				
			} catch (err) {
				return next(new Error("NOT AUTHORIZED tata bye bye"));
			}
		}

		io.use((socket, next) => {
			authSocketMiddleware(socket, next);
		});

		io.on("connection", (socket) => {
			socket.emit('likeupdate', likes);

			socket.on('liked', () => {
				likes++;
				socket.emit('likeupdate', likes);
				socket.broadcast.emit('likeupdate', likes) 
			})

			// socket.on('user-connected', async (user_id) =>{
			// 	live_users.set(user_id, socket.id);
			// 	const notifications = await Notification.count({where: {userId: user_id, deletedAt: null, viewed:false}});
			// 	console.log("Hello: ",notifications)
			// 	socket.emit('notification', notifications)
			// 	socket.user_id = user_id;
			// })

			socket.emit('new_notification', "")

			socket.on('disconnect',()=>{
				live_users.delete(socket.user_id)
			})

			socket.on('custom-event',(data, me, extra)=>{
				var jsonArray = [];
				for (let [key, value] of live_users) {
					var jsonObject = {};
					jsonObject[key] = value.id;
					jsonArray.push(jsonObject);
				  }
				socket.emit('users', jsonArray )
			})
		});
		
	}catch(error){
		console.log(error);
	}
}

setInterval(()=>{
	console.log({"Users": Array.from(live_users,([k,v])=> (k) ), "User connected: ": live_users.size  })
}, 2000)

module.exports = {
	ioInit : ioInit,
	sendNotification : sendNotification
}