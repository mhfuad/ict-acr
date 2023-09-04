const express = require('express')
const http = require('http')
const { Server } = require('socket.io');
const events = require('events')
const cors = require('cors')
const proxy = require('express-http-proxy')
const path = require('path')
const { Notification } = require('../models');

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/index')

const { PORT, APP_SECRET } = require('../config/index')

const authRoutes = require('../routes/authRoute')
const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const zoneRoutes = require('../routes/zoneRoutes')
const eleventhForm = require('../routes/eleventhFormRoutes')
const eleventhAssessmentRoute = require('../routes/eleventhAssessmentRoutes')
const iroEvaluationRouts = require('../routes/iroEvaluationRoutes')
const croEvaluationRouts = require('../routes/croEvaluationRoutes')
const accessLogRoutes = require('../routes/accessLogRoutes')
const reporterRoutes = require('../routes/reporterRoutes')
const sectionRoutes = require('../routes/sectionRoutes')
const designationRoutes = require('../routes/designationRoutes')
const departmentRoutes = require('../routes/departmentRoutes');
const wingRoutes = require('../routes/wingRoutes');
const branchRoutes = require('../routes/branchRoutes');
const { message } = require('../validation/roleValidation');


const app = express();
const server = http.createServer(app);

app.use(express.json({limit: '10mb'}));
app.use(cors());

//token verification
const verifyToken = (req, res, next) => {
    const hasToken = req.headers.authorization;
    
    if (!hasToken){
        return res.status(403).json({error: 'No token provided'})

    }
    const token = hasToken.split(" ")[1]
    jwt.verify(token, APP_SECRET,  (err, data) => {
        if (err){
            console.log('Token verification failed:', token)
            return res.sendStatus(403)
        }
        req.body.userId = data.userForToken.id;//attaching user is to request body
        next();
    })
}

//app.use('/firstClass', verifyToken, proxy('http://localhost:8001'))
// app.use((req, res, next)=>{
//     log(req.headers)
//     next()
// })
app.use('/auth', authRoutes)
app.use('/users', verifyToken, userRoutes)
app.use('/role', verifyToken, roleRoutes)
app.use('/zone', verifyToken, zoneRoutes)
app.use('/eleventhForm', verifyToken, eleventhForm)
app.use('/eleventh_assessment', verifyToken, eleventhAssessmentRoute)
app.use('/iro_evaluation', iroEvaluationRouts)
app.use('/cro_evaluation', croEvaluationRouts)
app.use('/reporter',verifyToken, reporterRoutes)
app.use('/access_log', accessLogRoutes)
app.use('/department', verifyToken, departmentRoutes)
app.use('/section', verifyToken, sectionRoutes)
app.use('/designation', verifyToken, designationRoutes)
app.use('/wing', verifyToken, wingRoutes)
app.use('/branch',verifyToken,  branchRoutes)
//image access
app.use('/file',(req,res) => res.sendFile(path.join(__dirname, `../images/${req.url}`)))


//socket
const io = new Server(server,{
	cors: {
		origin: "*",
	}
});

let likes = 0;
eventEmitter = new events.EventEmitter();

setInterval(()=>{
	likes++;
	eventEmitter.emit("event");
}, 2000);

io.on("connection", (socket) => {
    console.log(socket.id)
	socket.emit('likeupdate', likes);

	socket.on('liked', () => {
		likes++;
		socket.emit('likeupdate', likes);
		socket.broadcast.emit('likeupdate', likes) 
	})

    socket.on('user-connected', async(user_id, room, cb)=>{
        const notifications = await Notification.findAll({where: {userId: user_id, deletedAt: null}});
        cb(notifications)
    })

    // socket.on('disconnect',()=>{
    //     console.log("discconected "+socket.id)
    //     const index = user_socketId.indexOf(socket.id)
    //     if(index != -1){
    //         user_socketId.splice(index)
    //     }
    // })
});

server.listen(PORT, () => {
    console.log(`getWay is running on port ${PORT}`)
})