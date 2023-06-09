'use strict';

const {DATE} = require("sequelize");
const {now} = require("sequelize/lib/utils");
const bcrypt = require('bcrypt');

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
    await queryInterface.bulkInsert('Users', [
        {
          banglaName: "fuad bangla",
          englishName: "Fuad english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "111111",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "HR",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01675944076",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banglaName: "mahadi bangla",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "222222",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01675944076",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banglaName: "Ali Hasan",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "333333",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "0142817646",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banglaName: "Zahidul Islam",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "444444",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01816466113",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          banglaName: "Kamrul Islam",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "555555",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01732521359",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          banglaName: "Kazi Ashraf",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "777777",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01832550020",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          banglaName: "Ibrahim Tuhin",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "888888",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01677634402",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banglaName: "Pritom",
          englishName: "mahadi english",
          grade: "16th grade",
          class: "2nd class",
          idNo: "101010",
          password: await bcrypt.hash('123123', 10),
          batchNo: "23",
          nid: "460299",
          cadre: "yes",
          workingArea: "Jatrabari",
          section: "IT",
          fatherName: "Abdul Motalib",
          motherName: "Saleha Begum",
          dateOfJoin: new Date("12-03-2014"),
          dateOfBirth: new Date("10-02-1990"),
          prlStartDate: new Date("01-01-2015"),
          branch: "Hr",
          maritalStatus: "Married",
          highestEducationLevel: "MBA",
          gender: "Male",
          bloodGroup: "A+",
          personalMail: "fuad@gmail.com",
          officialMail: "fuad@inflack.com",
          personalNumber: "01640894369",
          officialNumber: "01914860368",
          status: "Active",
          designation: "Sinior Software Engineer",
          telephone: "027541044",
          role: "Admin",
          profileImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
          signatureImage: "sfasdfasdfasdfsdfhkashdflkjhdsfkljhasdlkfjhasdkjfskdjflksdjfsdkjfkjsdhflkjdsfsdfhlkjhlkjsdhflkjshdflkjhsdfkljsahdflkjhsdflkjh",
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
