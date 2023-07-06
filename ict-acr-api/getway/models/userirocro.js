'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserIroCro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserIroCro.init({
    user_id: DataTypes.INTEGER,
    iro: DataTypes.INTEGER,
    cro: DataTypes.INTEGER,
    date_from: DataTypes.DATE,
    date_to: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserIroCro',
  });
  return UserIroCro;
};