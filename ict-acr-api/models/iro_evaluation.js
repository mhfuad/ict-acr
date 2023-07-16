'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IRO_evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IRO_evaluation.init({
    form_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    evaluation_value: DataTypes.INTEGER,
    decition: DataTypes.INTEGER,
    cro: DataTypes.INTEGER,
    cro_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'IRO_evaluation',
  });
  return IRO_evaluation;
};