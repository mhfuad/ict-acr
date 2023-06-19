'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TenthForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      userIdNo: {
        type: Sequelize.STRING
      },
      highestEducationLevel: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      jobDuration: {
        type: Sequelize.STRING
      },
      acrStart: {
        type: Sequelize.DATE
      },
      acrEnd: {
        type: Sequelize.DATE
      },
      language:{
        type: Sequelize.STRING
      },
      specialTraining:{
        type: Sequelize.STRING
      },
      designation:{
        type: Sequelize.STRING
      },
      timeDuration:{
        type: Sequelize.STRING
      },
      salary:{
        type: Sequelize.STRING
      },
      iro:{
        type: Sequelize.STRING
      },
      cro:{
        type: Sequelize.STRING
      },
      userId:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TenthForms');
  }
};