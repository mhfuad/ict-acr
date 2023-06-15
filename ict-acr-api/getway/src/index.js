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

const StartServer = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    const secretKey = config.APP_SECRET;
    const payload = {userId: user.idNo, username: user.englishName}
    const options = {
        expiresIn: '1h'
    }
    return jwt.sign(payload, secretKey, options)
    const verifyToken = (req, res, next) => {
        const token = req.headers.authorization;

        if (!token){
            return res.status(401).json({error: 'No token provided'})
        }

        jwt.verify(token, APP_SECRET, { algorithms: ['HS512'] }, (err, decoded) => {
            if (err){
                console.log('Token verification failed:', err)
                return res.status(401).json({error: 'Invalid token'})

            }

            req.user = decoded;
            next();
        })
    }

    app.use('/firstClass', proxy('http://localhost:8001'))

    app.use('/auth', authRoutes)
    app.use('/users', verifyToken, userRoutes)
    app.use('/role', verifyToken, roleRoutes)
    app.use('/zone', verifyToken, zoneRoutes)

    app.listen(PORT, () => {
        console.log(`getWay is running on port ${PORT}`)
    })
}

StartServer();