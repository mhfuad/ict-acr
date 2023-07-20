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
    await queryInterface.bulkInsert('Designations', [
      {
        name: 'Joint Secretary',
        name_bn: 'সহকারী সচিব',
        code: "J.S",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Personal Officer (P.O)',
        name_bn: 'ব্যক্তিগত কর্মকর্তা',
        code: "P.O",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Office support staff',
        name_bn: 'অফিস সহকারী',
        code: "O.S.S",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Administrative Officer',
        name_bn: 'প্রশাসনিক কর্মকর্তা',
        code: "A.O",
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
    await queryInterface.bulkDelete('Designations', null, {});
  }
};
