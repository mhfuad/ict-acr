'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      //access log
      //1
      {
        title: 'All Logs',
        name: 'log_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2
      {
        title: 'Spacific User Logs',
        name: 'log_user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3
      {
        title: 'Create Log',
        name: 'log_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4
      {
        title: 'Update Log',
        name: 'log_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5
      {
        title: 'Delete Log',
        name: 'log_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //cro evaluation
      //6
      {
        title: 'CRO evaluation list',
        name: 'cro_eva_list',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7
      {
        title: 'CRO evaluation of a form',
        name: 'cro_eva_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8
      {
        title: 'CRO evaluation create',
        name: 'cro_eva_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9
      {
        title: 'CRO evaluation update',
        name: 'cro_eva_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //10
      {
        title: 'CRO evaluation Delete',
        name: 'cro_eva_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //department
      //11
      {
        title: 'Show all department',
        name: 'department_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //12
      {
        title: 'Create department',
        name: 'department_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //13
      {
        title: 'Show department',
        name: 'department_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //14
      {
        title: 'Update department',
        name: 'department_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //15
      {
        title: 'Delete department',
        name: 'department_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //designation
      //16
      {
        title: 'Show all designation',
        name: 'designation_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //17
      {
        title: 'Create designation',
        name: 'designation_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //18
      {
        title: 'Show  designation',
        name: 'designation_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //19
      {
        title: 'Update designation',
        name: 'designation_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //20
      {
        title: 'Delete designation',
        name: 'designation_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      //21
      {
        title: 'Create assessment',
        name: 'assessment_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //22
      {
        title: 'Show assessment',
        name: 'assessment_byForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //23
      {
        title: 'Show assessment form',
        name: 'assessment_createForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //assessment
      //24
      {
        title: 'Show all form',
        name: 'form_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //25
      {
        title: 'Can see  CRO\'s form list',
        name: 'form_forCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //26
      {
        title: 'Can see  IRO\'s form list',
        name: 'form_forIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //27
      {
        title: 'Can get form',
        name: 'form_get',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //28
      {
        title: 'Can create form',
        name: 'form_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //29
      {
        title: 'Can update form',
        name: 'form_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //30
      {
        title: 'Can delete form',
        name: 'form_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //IRO Evaluation
      //31
      {
        title: 'Can see All IRO evaluation',
        name: 'iro_evaAll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //32
      {
        title: 'Can see All IRO evaluation with form',
        name: 'iro_evaByForm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //33
      {
        title: 'Can create evaluation',
        name: 'iro_evaCreate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //34
      {
        title: 'Can update evaluation',
        name: 'iro_evaUpdate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //35
      {
        title: 'Can delete evaluation',
        name: 'iro_evaDelete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Reporter
      //36
      {
        title: 'Can create Reporter',
        name: 'reporter_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //37
      {
        title: 'Can see Reporter\'s IRO',
        name: 'reporter_ByIRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //38
      {
        title: 'Can see Reporter\'s CRO',
        name: 'reporter_ByCRO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //39
      {
        title: 'Can see all Reporter',
        name: 'reporter_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //40
      {
        title: 'Can see all Reporter by user',
        name: 'reporter_ByUser',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //41
      {
        title: 'Can update Reporter',
        name: 'reporter_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //42
      {
        title: 'Can delete Reporter',
        name: 'reporter_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Role
      //43
      {
        title: 'Can assign role',
        name: 'role_assign',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //section
      //44
      {
        title: 'Can see all section',
        name: 'section_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //45
      {
        title: 'Can create section',
        name: 'section_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //46
      {
        title: 'Can see section by id',
        name: 'section_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //47
      {
        title: 'Can update section',
        name: 'section_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //48
      {
        title: 'Can delete section',
        name: 'section_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //User
      //49
      {
        title: 'Can see all user',
        name: 'user_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //50
      {
        title: 'Can see user by id',
        name: 'user_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //51
      {
        title: 'Can create user',
        name: 'user_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //52
      {
        title: 'Can update user',
        name: 'user_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //53
      {
        title: 'Can delete user',
        name: 'user_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //54
      {
        title: 'Can upload image',
        name: 'user_ImageUpload',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //zone
      //55
      {
        title: 'Can see all zone',
        name: 'zone_all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //56
      {
        title: 'Can create zone',
        name: 'zone_create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //57
      {
        title: 'Can see zone by id',
        name: 'zone_ById',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //58
      {
        title: 'Can update zone',
        name: 'zone_update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //59
      {
        title: 'Can delete zone',
        name: 'zone_delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //60
      {
        title: 'Can see dashboard',
        name: 'dashboard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //61
      {
        title: 'Can see Settings',
        name: 'settings',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //62
      {
        title: 'Can request ACR',
        name: 'acr_request',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //63
      {
        title: 'Can see acr approved',
        name: 'acr_approved',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //64
      {
        title: 'Can see acr approved',
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
