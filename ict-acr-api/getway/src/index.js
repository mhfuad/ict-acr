const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

//const { databaseConnection } = require('./database')
const { PORT } = require('../config')

const userRouters = require('../routes/userRoutes')

const StartServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/firstClass', proxy('http://localhost:8001'))

    app.use('/users', userRouters)
    app.listen(PORT, () => {
        console.log(`getWay is running on port ${PORT}`)
    })
    //await databaseConnection();
}

StartServer();