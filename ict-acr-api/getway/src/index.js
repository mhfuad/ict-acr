const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

//const { databaseConnection } = require('./database')
const { PORT } = require('../config')

const userRoutes = require('../routes/userRoutes')
const roleRoutes = require('../routes/roleRoutes')
const zoneRoutes = require('../routes/zoneRoutes')

const StartServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/firstClass', proxy('http://localhost:8001'))

    app.use('/users', userRoutes)
    app.use('/role', roleRoutes)
    app.use('/zone', zoneRoutes)

    app.listen(PORT, () => {
        console.log(`getWay is running on port ${PORT}`)
    })
    //await databaseConnection();
}

StartServer();