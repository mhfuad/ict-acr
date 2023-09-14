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
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        title: "Super dmin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'hr',
        title: "HR settings",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User',
        title: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IRO',
        title: "Iro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CRO',
        title:"CRO",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Role',
        title: "Role",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'access_log',
        title: "Access Log",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'applicant',
        title: "Applicant",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reporter_assign',
        title: "Reporter Assign",
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
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
