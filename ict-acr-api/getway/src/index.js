const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/index')

const { PORT, APP_SECRET } = require('../config')

const authRoutes = require('../routes/authRoute')
const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const zoneRoutes = require('../routes/zoneRoutes')
const eleventhForm = require('../routes/11thFormRoutes')

const StartServer = () => {
    const app = express();
    app.use(express.json());
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

    app.listen(PORT, () => {
        console.log(`getWay is running on port ${PORT}`)
    })
}

StartServer();