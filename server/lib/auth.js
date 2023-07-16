const {redisClient, removeSingleCache} = require('./redis');
const {decodeToken, encodeToken} = require('./UserAccessToken');

const authSocketUser = async ( token ) => {
    
    try{

        //console.log(await encodeToken({user: 1101}))
        const tokenData = await decodeToken(token)

        if(!tokenData){
            throw "Invalid token"
        }

        const key = `s:${tokenData.user}:${token}`

        const tokenExist = await redisClient().exists(key)

        if(!tokenExist){
            throw "Invalid token"
        }

        // # in production mode
        //await removeSingleCache(key)

        return tokenData

    }catch(error){
        console.log("Auth token error:", error);
        return false
    }

}

module.exports = {
    authSocketUser : authSocketUser
}