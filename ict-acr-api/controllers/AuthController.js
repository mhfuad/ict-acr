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
            }else {
                console.log(req.body);
                // acceRepository.create({
                //     "ip":"192.168.0.1",
                //     "user_id":req.body.user_id,
                //     "date":"2023-07-12 06:43:39"
                // })
                res.json({message});
            }
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async otpMatching(req, res){
        try{
            var token = await repository.otpMatching(req.body);
            if(token === "not_found"){
                res.status(404).json({error: "User not found"});
            }
            res.json({token});
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new AuthController();