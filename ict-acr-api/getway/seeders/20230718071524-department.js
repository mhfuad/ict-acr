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
      await queryInterface.bulkInsert('Departments', [
        {
          name: 'General Service Wing',
          code: 'GSW',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Budget Branch',
          code: 'BGTBR',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Internal Service Branch',
          code: 'ISBR',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
