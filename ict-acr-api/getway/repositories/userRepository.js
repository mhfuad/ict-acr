
const { User, Role, Permission } = require('../models');

class UserRepository{
    constructor() {
        this.users = [];
        this.nextId = 1;
    }

    async getAllUsers(){
        return await User.findAll({attributes: { exclude: ['otp','password','createdAt','updatedAt'] }});
    }

    async getUserById(id) {
        return await User.findOne({where: {idNo:id},attributes: { exclude: ['otp','password','createdAt', 'updatedAt'] }})
    }

    createUser(user) {
        try{
           return User.create({
                banglaName: user.banglaName,
                englishName: user.englishName,
                grade: user.grade,
                class: user.class,
                idNo: user.idNo,
                batchNo: user.batchNo,
                nid: user.nid,
                cadre: user.cadre,
                workingArea: user.workingArea,
                section: user.section,
                fatherName: user.fatherName,
                motherName: user.motherName,
                dateOfJoin: user.dateOfJoin,
                dateOfBirth: user.dateOfBirth,
                prlStartDate: user.prlStartDate,
                branch: user.branch,
                maritalStatus: user.maritalStatus,
                highestEducationLevel: user.highestEducationLevel,
                gender: user.gender,
                bloodGroup: user.bloodGroup,
                personalMail: user.personalMail,
                officialMail: user.officialMail,
                personalNumber: user.personalNumber,
                officialNumber: user.officialNumber,
                status: user.status,
                designation: user.designation,
                telephone: user.telephone,
                role: user.role,
                profileImage: user.profileImage,
                signatureImage: user.signatureImage,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }catch (error){
            console.log(error)
        }
    }

    updateUser(id, user) {
        User.update({
            banglaName: user.banglaName,
            englishName: user.englishName,
            grade: user.grade,
            class: user.class,
            idNo: user.idNo,
            password: '123123',
            batchNo: user.batchNo,
            nid: user.nid,
            cadre: user.cadre,
            workingArea: user.workingArea,
            section: user.section,
            fatherName: user.fatherName,
            motherName: user.motherName,
            dateOfJoin: user.dateOfJoin,
            dateOfBirth: user.dateOfBirth,
            prlStartDate: user.prlStartDate,
            branch: user.branch,
            maritalStatus: user.maritalStatus,
            highestEducationLevel: user.highestEducationLevel,
            gender: user.gender,
            bloodGroup: user.bloodGroup,
            personalMail: user.personalMail,
            officialMail: user.officialMail,
            personalNumber: user.personalNumber,
            officialNumber: user.officialNumber,
            status: user.status,
            designation: user.designation,
            telephone: user.telephone,
            role: user.role,
            profileImage: user.profileImage,
            signatureImage: user.signatureImage,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            where: {
                id: id
            }
        })
    }

    deleteUser(id) {
        User.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = new UserRepository();