'use strict';
const { Role } = require('../models')
const { Permission } = require('../models')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const role1 = await Role.create({ name: 'Admin' });
    const role2 = await Role.create({ name: 'User' });

    // Seed permissions
    const permission1 = await Permission.create({ name: 'Create' });
    const permission2 = await Permission.create({ name: 'Read' });
    const permission3 = await Permission.create({ name: 'Update' });
    const permission4 = await Permission.create({ name: 'Delete' });

    // Associate roles with permissions
    await role1.addPermission(permission1);
    await role1.addPermission(permission2);
    await role1.addPermission(permission3);
    await role1.addPermission(permission4);

    await role2.addPermission(permission2);
    await role2.addPermission(permission4);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
