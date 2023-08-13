'use strict';
const { Role } = require('../models')
const { Permission } = require('../models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user_roles', [
      //1 admin, 2 user, 3 iro, 4 cro
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

    await queryInterface.bulkInsert('role_permissions', [
      //1 admin, 2 user, 3 iro, 4 cro
      {
        RoleId: 4,
        PermissionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 3,
        PermissionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 3,
        PermissionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 2,
        PermissionId: 28,
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
    await queryInterface.bulkDelete('role_permissions', null, {});
    
  }
};
