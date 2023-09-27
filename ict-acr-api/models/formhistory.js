'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FormHistory.init({
    formId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    route: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormHistory',
  });
  return FormHistory;
};