'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assessment.init({
    questionId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    formId: DataTypes.INTEGER,
    questionTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assessment',
  });
  return Assessment;
};