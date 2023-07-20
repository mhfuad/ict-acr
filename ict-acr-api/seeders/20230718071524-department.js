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
          name_bn: 'সাধারণ সেবা ওয়িং',
          code: 'GSW',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Budget Branch',
          name_bn: 'বাজেট শাখা',
          code: 'BGTBR',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Internal Service Branch',
          name_bn: 'অভ্যন্তরীণ সেবা শাখা',
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
