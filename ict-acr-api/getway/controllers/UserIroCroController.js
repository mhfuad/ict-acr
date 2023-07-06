const userIroCroRepository = require('../repositories/userIroCroRepository')

class UserIroCroController{
    async getUserIroCro(req, res) {
        try {
            const userIroCros = await userIroCroRepository.getUserAllIroCros(req.query.user_id);
            res.json(userIroCros);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUserIroCroById(req, res) {
        try {
            const userIroCro = await userIroCroRepository.getUserIroCroById(req.params.id);
            if (!userIroCro) {
                return res.status(404).json({ error: 'UserIroCro not found' });
            }
            res.json(userIroCro);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async createUserIroCro(req, res) {
        try {
            const userIroCro = await userIroCroRepository.createUserIroCro(req.body);
            res.status(200).json(userIroCro);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateUserIroCro(req, res) {
        try {
            const userIroCro = await userIroCroRepository.updateUserIroCro(req.params.id, req.body);
            if (!userIroCro) {
                return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json({ message: 'updated successfully', userIroCro });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUserIroCro(req, res) {
        try {
            await userIroCroRepository.deleteUserIroCro(req.params.id);
            res.json({ message: 'UserIroCro deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new UserIroCroController();