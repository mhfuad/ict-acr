'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IRO_evaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      form_id: {
        type: Sequelize.INTEGER,
        unique:true
      },
      user_id: {
        type: Sequelize.STRING
      },
      evaluation_value: {
        type: Sequelize.INTEGER
      },
      decision: {
        type: Sequelize.INTEGER
      },
      cro: {
        type: Sequelize.STRING
      },
      cro_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('IRO_evaluations');
  }
};