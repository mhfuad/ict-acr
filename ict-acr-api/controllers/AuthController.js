const repository = require('../repositories/authRepository')
class AuthController{

    async authenticateUser(req, res){
        try {
            var message = await repository.login(req.body);
            if(message === "not_found"){
                res.status(404).json({error: "User not found"});
            }else if(message === "not_match"){
                res.status(404).json({error: "Credential not match"});
            }else {
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