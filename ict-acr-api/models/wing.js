'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wing.hasMany(models.Branch,{foreignKey: 'wingId'})
    }
  }
  Wing.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wing',
  });
  return Wing;
};