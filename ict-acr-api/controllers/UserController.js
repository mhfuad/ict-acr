const userRepository = require('../repositories/userRepository')

class UserController{
    async users(req, res) {
        try {
            const users = await userRepository.allUser(req);
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await userRepository.getAllUsers(req);
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userRepository.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }else{
                res.json(user);
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async searchUser(req, res){
        try {
            const user = await userRepository.search(req.params.criteria, req);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }else{
                res.json(user);
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await userRepository.createUser(req.body);
            if(user){
                res.status(201).json({message: "User create successfull."});
            }
            
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userRepository.updateUser(req.params.id, req.body);
            // if (!user) {
            //     return res.status(404).json({ error: 'User not found' });
            // }
            // res.json({message: "user update successfully"});
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const re = await userRepository.deleteUser(req.params.id);
            if(re === 1){
                res.json({message: "User delete successfull"});
            }else{
                res.json({error: re})
            }
            
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async upload_image(req, res) {
        const response = await userRepository.upload_image(req.params.user_id, req.body);
        if(response == "no_user"){
            res.status(500).json("No User Found.")
        }else{
            res.json(response);
        }
        
    }

    async backup(req, res){
        try {
            const user = await userRepository.backUp(res);
            return res.json(user);
        } catch (err) {
            res.json({ error: err.message });
        }
    }

    async restore(req, res){
        try {
            const user = await userRepository.restore(res);
            return res.json(user);
        } catch (err) {
            res.json({ error: err.message });
        }
    }
}

module.exports = new UserController();