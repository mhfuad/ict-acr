'use strict';
const { Role } = require('../models')
const { Permission } = require('../models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user_roles', [
      {
        UserId: 1,
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 7,
        RoleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 8,
        RoleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_role', null, {});
  }
};
