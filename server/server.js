require('dotenv').config({ path: require('path').join(__dirname, "../", "env", `.env.notification.${process.env.SERVER}`) })

const { redisConnect, redisSubscribe, redisClient} = require('./lib/redis');
const { v4 : uuid } = require('uuid')
const io = require('socket.io')();

const { authSocketUser } = require('./lib/auth');

const initRedis = async (io) => {
    
    try{

        const redis = await redisConnect();

        if(!redis){
            throw "Redis connection failed";
        }

        await redisSubscribe().subscribe('message', async ( data )=>{

            try{

                console.log(data)

                const {user = 0, message = '', type = ''} = JSON.parse(data)

                switch(type){ 

                    case 'NOTIFICATION':{

                        console.log(user, message)

                        io.to(user.toString()).emit('NOTIFICATION', message)
                         
                        break

                    }

                    case "SIGNOUT":{
                        io.to(user).emit('SIGNOUT', message)
                        break;
                    }
            
                }   

            }catch(error) {
                console.log(error);
            }
            
        }); 
    
    }catch(error){
        console.log("Redis Error: ", error);
    }
} 

(async ()  => {

    try{

    
        io.on('connection', async (socket) => {
    
            try{
    
                //authentication
                const token = socket.handshake.headers['x-socket-token']

                if(!token){
                    throw "Invalid token"
                }

                const tokenData = await authSocketUser(token);


                if(!tokenData){
                    throw "invalid token"
                }
    
                if(tokenData?.user){
    
                    socket.join(tokenData?.user.toString());
    
                }else{
                    throw "invalid token ---"
                }
    
                socket.on('disconnect', () => {
    
                    try{
    
                       
    
                    }catch(error){
                    
                    }
                    
                })
    
            }catch(error){
                console.log(error)
                // # if invalid token then socket connection will be rejected 
                socket.disconnect()
    
            }
    
        })
    
        // setInterval(()=> {
            
        //     console.log(io.sockets.adapter.rooms)
            
        // }, 5000)

    
        await initRedis(io)
    
       
        io.listen(process.env.SOCKET_PORT, () => {
            console.log(`notification server: ${process.env.SERVER} running on: ${process.env.SOCKET_PORT} port`)
        }) 
    
    
        
    }catch(error){
        console.log(error);
        process.exit(0)
        
    
    }

})()





