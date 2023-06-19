'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TenthForms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TenthForms.init({
    name: DataTypes.STRING,
    userIdNo: DataTypes.STRING,
    highestEducationLevel: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    jobDuration: DataTypes.STRING,
    acrStart: DataTypes.DATE,
    acrEnd: DataTypes.DATE,
    language: DataTypes.STRING,
    specialTraining: DataTypes.STRING,
    designation: DataTypes.STRING,
    timeDuration: DataTypes.STRING,
    salary: DataTypes.STRING,
    iro: DataTypes.STRING,
    cro: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TenthForms',
  });
  return TenthForms;
};