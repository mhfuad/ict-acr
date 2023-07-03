'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EleventhAssessments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EleventhAssessments.init({
    questionId: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    formId: DataTypes.INTEGER,
    questionTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EleventhAssessments',
  });
  return EleventhAssessments;
};