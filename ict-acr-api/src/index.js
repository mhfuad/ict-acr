const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')
const path = require('path')

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/index')

const { PORT, APP_SECRET } = require('../config')

const authRoutes = require('../routes/authRoute')
const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const zoneRoutes = require('../routes/zoneRoutes')
const eleventhForm = require('../routes/eleventhFormRoutes')
const eleventhAssessmentRoute = require('../routes/eleventhAssessmentRoutes')
const reporterRoutes = require('../routes/reporterRoutes')

const StartServer = () => {
    const app = express();
    app.use(express.json({limit: '10mb'}));
    app.use(cors());

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

    app.use('/auth', authRoutes)
    app.use('/users', verifyToken, userRoutes)
    app.use('/role', verifyToken, roleRoutes)
    app.use('/zone', verifyToken, zoneRoutes)
    app.use('/eleventhForm', eleventhForm)
    app.use('/eleventh_assessment', eleventhAssessmentRoute)
    app.use('/reporter', reporterRoutes)
    //image access
    app.use('/file',(req,res) => res.sendFile(path.join(__dirname, `../images/${req.url}`)))
    app.listen(PORT, () => {
        console.log(`getWay is running on port ${PORT}`)
    })
}
StartServer();