
const { User } = require('../models');

class UserRepository{
    constructor() {
        this.users = [];
        this.nextId = 1;
    }

    async getAllUsers(){
        return await User.findAll();
    }

    async getUserById(id) {
        return await User.findByPk(id);
    }

    createUser(user) {
        const newUser = new User(this.nextId++, user.name, user.email);
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id, user) {
        const foundUser = this.getUserById(id);
        if (foundUser) {
            foundUser.name = user.name;
            foundUser.email = user.email;
            return foundUser;
        }
        return null;
    }

    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new UserRepository();