const repository = require('../repositories/roleRepository')
class RoleController{

    async assignRole(req, res){
        try {
            var test = await repository.assignRole(req.params.user, req.params.role);
            res.json(test);
            //res.json(req.params.user + req.params.role);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new RoleController();