'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    banglaName: DataTypes.STRING,
    englishName: DataTypes.STRING,
    grade: DataTypes.STRING,
    class: DataTypes.STRING,
    idNo: DataTypes.STRING,
    batchNo: DataTypes.STRING,
    nid: DataTypes.STRING,
    cadre: DataTypes.STRING,
    workingArea: DataTypes.STRING,
    section: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    motherName: DataTypes.STRING,
    dateOfJoin: DataTypes.DATE,
    dateOfBirth: DataTypes.DATE,
    prlStartDate: DataTypes.DATE,
    branch: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    highestEducationLevel: DataTypes.STRING,
    gender: DataTypes.STRING,
    bloodGroup: DataTypes.STRING,
    personalMail: DataTypes.STRING,
    officialMail: DataTypes.STRING,
    personalNumber: DataTypes.STRING,
    officialNumber: DataTypes.STRING,
    status: DataTypes.STRING,
    designation: DataTypes.STRING,
    telephone: DataTypes.STRING,
    role: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    signatureImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

