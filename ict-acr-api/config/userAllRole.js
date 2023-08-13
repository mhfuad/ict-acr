const { User, Role, Permission } = require('../models');


async function resolveUserRoles(id){
  //Would query DB
  const userWithRole = await User.findOne({where: {id:id}, include: Role})
  return userWithRole
}

module.exports = {
  resolveUserRoles
}