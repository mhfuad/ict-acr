const repository = require('../repositories/authRepository')
class AuthController{

    async authenticateUser(req, res){
        try {
            var token = await repository.login(req.body);

            res.json({token});
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new AuthController();