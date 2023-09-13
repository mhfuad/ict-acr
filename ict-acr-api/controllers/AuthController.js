const repository = require('../repositories/authRepository')
const acceRepository = require('../repositories/accessLogRepository')
class AuthController{

    async authenticateUser(req, res){
        try {
            var message = await repository.login(req.body);
            if(message === "not_found"){
                res.status(404).json({error: "User not found"});
            }else if(message === "not_match"){
                res.status(404).json({error: "Credential not match"});
            }else if(message == 'no'){
                res.status(404).json({error: "Please check SMS or Email or Both."})  
            } else {
                console.log(req.body);
                
                res.json({message});
            }
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async otpMatching(req, res){
        try{
            var token = await repository.otpMatching(req);
            if(token === "not_found"){
                res.status(404).json({error: "User not found"});
            }else if(token === "otp_not_match"){
                res.status(404).json({error: "Incorrect OTP"});
            }else if(token === "otp_expire"){
                res.status(404).json({error: "Time expire"});
            }else {
                res.json({token});
            }
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new AuthController();