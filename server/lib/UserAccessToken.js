const jwt = require('jsonwebtoken');
const  {promisify} = require('util');

const jwtSign = promisify(jwt.sign).bind(jwt)
const jwtVerify = promisify(jwt.verify).bind(jwt)

const encodeToken = async (value) => {
    
    try{
        
        const token = await jwtSign( value, process.env.JWT_Privatekey)
        return token;
    }
    catch(error){

        console.log(error);
      
        return false;
    }

}

const decodeToken = async (value) =>{

    try{

        const decodeToken = await jwtVerify(value, process.env.JWT_Privatekey)
        
        return decodeToken;
        
    }
    catch(error){
       console.error(error);
        return false 
    }
}

module.exports = {
    encodeToken : encodeToken,
    decodeToken : decodeToken
}