'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      //access log
      {
        name: 'log_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'log_user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'log_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'log_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'log_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //cro evaluation
      {
        name: 'cro_eva_list',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cro_eva_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cro_eva_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cro_eva_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cro_eva_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //department
      {
        name: 'department_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'department_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'department_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'department_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'department_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //designation
      {
        name: 'designation_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'designation_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'designation_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'designation_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'designation_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      {
        name: 'assessment_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'assessment_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'assessment_createForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      {
        name: 'form_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_forCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_forIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'form_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //IRO Evaluation
      {
        name: 'iro_evaAll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iro_evaByForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iro_evaCreate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iro_evaUpdate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'iro_evaDelete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Reporter
      {
        name: 'reporter_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_ByIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_ByCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_ByUser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'reporter_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Role
      {
        name: 'role_assign',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //section
      {
        name: 'section_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'section_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'section_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'section_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'section_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //User
      {
        name: 'user_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user_ImageUpload',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //zone
      {
        name: 'zone_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zone_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zone_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zone_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'zone_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
