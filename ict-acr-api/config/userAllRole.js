const { User, Role, Permission } = require('../models');


async function resolveUserRoles(id){
  //Would query DB
  // const userWithRole = await User.findOne({
  //     where: {id:id},
  //     include: [
  //       {
  //         model: Role
  //       },
  //     ]
  //   })

  const userWithRole = await User.findOne({
      where: {id:id},
      attributes: { exclude: ['otp','password','createdAt', 'updatedAt'] },
      include: {
          model: Role,
          attributes: ['name'],
          include:{
              model: Permission,
              attributes: ['name']
          }
      }
  })
  return userWithRole
}

module.exports = {
  resolveUserRoles
}