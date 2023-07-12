'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      banglaName: {
        type: Sequelize.STRING
      },
      englishName: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      idNo: {
        type: Sequelize.STRING,
        unique: true
      },
      password:{
        type: Sequelize.STRING,
      },
      batchNo: {
        type: Sequelize.STRING
      },
      nid: {
        type: Sequelize.STRING
      },
      cadre: {
        type: Sequelize.STRING
      },
      workingArea: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      motherName: {
        type: Sequelize.STRING
      },
      dateOfJoin: {
        type: Sequelize.DATE
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      prlStartDate: {
        type: Sequelize.DATE
      },
      branch: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      highestEducationLevel: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      bloodGroup: {
        type: Sequelize.STRING
      },
      personalMail: {
        type: Sequelize.STRING
      },
      officialMail: {
        type: Sequelize.STRING
      },
      personalNumber: {
        type: Sequelize.STRING
      },
      otp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      officialNumber: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING,
        allowNull:true
      },
      signatureImage: {
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};