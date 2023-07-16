const redis = require('redis');

let redisSetup = null;

let redisPublish = null;





const removeSingleCache = async (key) => {

    try {

        if (process.env.SERVER == "production") {
            //for linux server
            await redisSetup.unlink(key);

        } else {
            // for windows user redis del function
            await redisSetup.del(key);

        }

        return { success: true };

    } catch (error) {

        console.log(error);

        return { success: false };

    }

}



module.exports = {

    redisConnect: async () => {

        try {

            redisSetup = redis.createClient({
                host: "127.0.0.1",
                auth_pass: process.env.REDIS_PASS,
                port: 6379
            })


            redisSubscribe = redis.createClient({
                host: "127.0.0.1",
                auth_pass: process.env.REDIS_PASS,
                port: 6379
            })

            redisSubscribe.on('error', err => {
                console.log('redis subscriber error: ' + err);
            });

            redisSetup.on('error', err => {
                console.log('redis client error: ' + err);
            });
            
            await redisSetup.connect() 

            await redisSubscribe.connect()

            return true

        } catch (error) {

            console.log(error)
            return false

        }

    },

    redisClient: () => {

        if (!redisSetup) {
            console.log('not working')
            return null;
        }
        return redisSetup;
    },

    redisSubscribe: () => {
        if (!redisSubscribe) {
            console.log('not working')
            return null;
        }
        return redisSubscribe;
    },

    removeSingleCache: removeSingleCache

}



