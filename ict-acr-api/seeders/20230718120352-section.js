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
        name_bn: 'রাজস্ব শাখা',
        code: "RSCE",
        department_id: 2
      },
      {
        name: 'Development Section',
        name_bn: 'উন্নয়ন শাখা',
        code: "DSEC",
        department_id: 2
      },
      {
        name: 'Accounts section',
        name_bn: 'হিসাব শাখা',
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
