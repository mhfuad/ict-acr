'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('Permissions', [
    //   {
    //     name: 'create_employee',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     name: 'view_employee',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     name: 'list_employee',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
