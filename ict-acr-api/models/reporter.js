'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reporter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reporter.init({
    user_id: DataTypes.INTEGER,
    iro: DataTypes.INTEGER,
    cro: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    gread: DataTypes.INTEGER,
    designation: DataTypes.INTEGER,
    joining_date_current_position: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reporter',
  });
  return Reporter;
};