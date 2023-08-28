'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      //access log
      //1
      {
        name: 'log_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2
      {
        name: 'log_user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3
      {
        name: 'log_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4
      {
        name: 'log_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5
      {
        name: 'log_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //cro evaluation
      //6
      {
        name: 'cro_eva_list',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7
      {
        name: 'cro_eva_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8
      {
        name: 'cro_eva_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9
      {
        name: 'cro_eva_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //10
      {
        name: 'cro_eva_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //department
      //11
      {
        name: 'department_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //12
      {
        name: 'department_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //13
      {
        name: 'department_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //14
      {
        name: 'department_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //15
      {
        name: 'department_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //designation
      //16
      {
        name: 'designation_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //17
      {
        name: 'designation_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //18
      {
        name: 'designation_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //19
      {
        name: 'designation_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //20
      {
        name: 'designation_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      //21
      {
        name: 'assessment_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //22
      {
        name: 'assessment_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //23
      {
        name: 'assessment_createForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      //24
      {
        name: 'form_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //25
      {
        name: 'form_forCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //26
      {
        name: 'form_forIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //27
      {
        name: 'form_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //28
      {
        name: 'form_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //29
      {
        name: 'form_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //30
      {
        name: 'form_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //IRO Evaluation
      //31
      {
        name: 'iro_evaAll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //32
      {
        name: 'iro_evaByForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //33
      {
        name: 'iro_evaCreate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //34
      {
        name: 'iro_evaUpdate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //35
      {
        name: 'iro_evaDelete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Reporter
      //36
      {
        name: 'reporter_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //37
      {
        name: 'reporter_ByIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //38
      {
        name: 'reporter_ByCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //39
      {
        name: 'reporter_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //40
      {
        name: 'reporter_ByUser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //41
      {
        name: 'reporter_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //42
      {
        name: 'reporter_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Role
      //43
      {
        name: 'role_assign',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //section
      //44
      {
        name: 'section_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //45
      {
        name: 'section_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //46
      {
        name: 'section_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //47
      {
        name: 'section_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //48
      {
        name: 'section_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //User
      //49
      {
        name: 'user_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //50
      {
        name: 'user_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //51
      {
        name: 'user_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //52
      {
        name: 'user_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //53
      {
        name: 'user_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //54
      {
        name: 'user_ImageUpload',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //zone
      //55
      {
        name: 'zone_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //56
      {
        name: 'zone_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //57
      {
        name: 'zone_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //58
      {
        name: 'zone_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //59
      {
        name: 'zone_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //60
      {
        name: 'dashboard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //61
      {
        name: 'settings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //62
      {
        name: 'acr_request',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //63
      {
        name: 'acr_approved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //64
      {
        name: 'acr_report',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
