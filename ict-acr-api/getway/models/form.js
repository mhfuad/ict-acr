'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EleventhForms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EleventhForms.init({
    name: DataTypes.STRING,
    userIdNo: DataTypes.STRING,
    highestEducationLevel: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    joiningDate: DataTypes.DATE,
    departmentExamPass: DataTypes.BOOLEAN,
    departmentExamDate: DataTypes.DATE,
    jobStatus: {
      type: DataTypes.ENUM,
      values: ['Entering','Temporary', 'Permanent'],
      allowNull: false
    },
    acrStart: DataTypes.DATE,
    acrEnd: DataTypes.DATE,
    language: DataTypes.STRING,
    specialTraining: DataTypes.STRING,
    designation: DataTypes.STRING,
    salary: DataTypes.STRING,
    iro: DataTypes.STRING,
    cro: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'EleventhForms',
  });
  return EleventhForms;
};