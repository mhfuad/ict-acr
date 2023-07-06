const { UserIroCro } = require('../models');

class UserIroCroRepository{
    constructor() {
        this.users = [];
        this.nextId = 1;
    }

    async getUserAllIroCros(user_id){
        return await UserIroCro.findAll({
            where: { user_id: user_id}
        });
    }

    async getUserIroCroById(id) {
        return await UserIroCro.findByPk(id);
    }

    createUserIroCro(user) {
        try{
           return UserIroCro.create({
                user_id: user.user_id,
                iro: user.iro,
                cro: user.cro,
                date_from: user.date_from,
                date_to: user.date_to,
                status: user.status,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateUserIroCro(id, user) {
        try {
            // update userIroCro and return the updated userIroCro
            return UserIroCro.update(user, {
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    deleteUserIroCro(id) {
        UserIroCro.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new UserIroCroRepository();