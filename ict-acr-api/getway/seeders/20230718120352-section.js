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

    await queryInterface.bulkInsert('Sections', [
      {
        name: 'Revenue Section',
        code: "RSCE",
        department_id: 2
      },
      {
        name: 'Development Section',
        code: "DSEC",
        department_id: 2
      },
      {
        name: 'Accounts section',
        code: "ASC",
        department_id: 2
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
    await queryInterface.bulkDelete('Sections', null, {});
  }
};
