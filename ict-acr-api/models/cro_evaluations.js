'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CRO_evaluations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CRO_evaluations.init({
    form_id: DataTypes.INTEGER,
    evaluation: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    cro: DataTypes.STRING,
    cro_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CRO_evaluations',
  });
  return CRO_evaluations;
};