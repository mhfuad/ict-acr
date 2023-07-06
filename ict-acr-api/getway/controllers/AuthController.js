const repository = require('../repositories/authRepository')
class AuthController{

    async authenticateUser(req, res){
        try {
            var message = await repository.login(req.body);

            res.json({message});
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async otpMatching(req, res){
        try{
            var token = await repository.otpMatching(req.body);
            res.json({token});
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new AuthController();