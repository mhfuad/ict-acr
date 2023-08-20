const repository = require('../repositories/roleRepository')
class RoleController{

    async assignRole(req, res){
        try {
            var test = await repository.assignRole(req.params.user, req.body.role);
            res.json(test);
            //res.json(req.params.user + req.params.role);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
    async assignPermission(req, res){
        try {
            var test = await repository.assignPermission(req.params.role, req.body.permissions);
            res.json(test);
            //res.json(req.params.user + req.params.role);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
    async removePermission(req, res){
        try {
            var test = await repository.removePermission(req.params.role, req.body.permissions);
            res.json(test);
            //res.json(req.params.user + req.params.role);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
    async removeRole(req, res){
        try {
            var test = await repository.removeRole(req.params.user, req.body.role);
            res.json(test);
            //res.json(req.params.user + req.params.role);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
    async getAll(req, res){
        try{
            var roles = await repository.allRole();
            res.json(roles);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async create(req, res){
        try{
            var roles = await repository.create(req);
            res.json(roles);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async delete(req, res){
        try{
            var roles = await repository.delete(req.params.id);
            res.json(roles);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getAllPermission(req, res){
        try{
            var result = await repository.allPermission(req);
            res.json(result);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }

    async getOneRole(req, res){
        try{
            var roles = await repository.getRole(req.params.id);
            res.json(roles);
        } catch (err){
            res.status(500).json({ error: err.message})
        }
    }
}

module.exports = new RoleController();