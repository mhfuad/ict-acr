
const { User, Role, Permission, user_role } = require('../models');
const AuthRepository = require('../repositories/authRepository')
const bcrypt = require('bcrypt');
const fs = require('fs');
const { Op } = require('sequelize');

class UserRepository{
    constructor() {
        this.users = [];
        this.nextId = 1;
    }
    async allUser(req){
        
        try{
            const users = await User.findAll({
                attributes: { exclude: ['otp','password','createdAt','updatedAt'] },
            });
            return users
        }catch (error) {
            console.error('Error fetching paginated users:', error);
            return 500;
        }
    }

    async getAllUsers(req){
        const PAGE_SIZE = 10;
        const page = parseInt(req.params.page, 10);
        const offset = (page - 1) * PAGE_SIZE;
        try{
            const users = await User.findAll({
                attributes: { exclude: ['otp','password','createdAt','updatedAt'] },
                limit: PAGE_SIZE,
                offset: offset,
                order: [['id','ASC']]
            });
            const totalCount = await User.count();
            const totalpages = Math.ceil(totalCount / PAGE_SIZE);
            const result = {
                page:page,
                totalpages: totalpages,
                users: users
            }
            return result
        }catch (error) {
            console.error('Error fetching paginated users:', error);
            return 500;
        }
    }

    async getUserById(id) {
        const userWithRole = await User.findOne({
            where: {idNo:id},
            attributes: { 
                exclude: ['otp','password','createdAt', 'updatedAt'] },
                include: {
                    model: Role,
                    attributes: ['id','name'],
                    include:{
                        model: Permission,
                        attributes: ['id','name']
                    }
                }
        })
        const filter = userWithRole.Roles.map( (r)=>({
                id: r.id,
                name: r.name,
                permissions: r.Permissions.map( (p)=>({
                    id: p.id,
                    name: p.name
                }))           
            }))
        const modify = {
            id: userWithRole.id,
            banglaName: userWithRole.banglaName,
            englishName: userWithRole.englishName,
            grade: userWithRole.grade,
            class: userWithRole.class,
            idNo: userWithRole.idNo,
            batchNo: userWithRole.batchNo,
            nid: userWithRole.nid,
            cadre: userWithRole.cadre,
            workingArea: userWithRole.workingArea,
            section: userWithRole.section,
            fatherName: userWithRole.fatherName,
            motherName: userWithRole.motherName,
            dateOfJoin: userWithRole.dateOfJoin,
            dateOfBirth: userWithRole.dateOfBirth,
            prlStartDate: userWithRole.prlStartDate,
            branch: userWithRole.branch,
            maritalStatus: userWithRole.maritalStatus,
            highestEducationLevel: userWithRole.highestEducationLevel,
            gender: userWithRole.gender,
            bloodGroup: userWithRole.bloodGroup,
            personalMail: userWithRole.personalMail,
            officialMail: userWithRole.officialMail,
            personalNumber: userWithRole.personalNumber,
            officialNumber: userWithRole.officialNumber,
            status: userWithRole.status,
            designation: userWithRole.designation,
            telephone: userWithRole.telephone,
            role: userWithRole.role,
            profileImage: userWithRole.profileImage,
            signatureImage: userWithRole.signatureImage,
            Roles:filter
        }
        return modify;
    }

    async search(criteria){
        try{
            const users = await User.findAll({
                where: {
                    [Op.or]: [
                        {
                            banglaName: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            englishName: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            idNo: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            personalNumber: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            designation: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            nid: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                        {
                            cadre: {
                                [Op.like]: `%${criteria}%`,
                            } 
                        },
                    ]
                }
            });
            return users;
        } catch (err){
            console.error('Error searching for books:', err)
        }
    }

    async createUser(user) {
        // this.saveBase64Image(user.profileImage,"./images/profile_pic/"+user.idNo+"pic.png")
        // this.saveBase64Image(user.signatureImage,"./images/signature_pic/"+user.idNo+"sig.png")

        try{
            const user_created = await User.create({
                banglaName: user.banglaName,
                englishName: user.englishName,
                grade: user.grade,
                class: user.class,
                idNo: user.idNo,
                password: await bcrypt.hash('123123', 10),
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
                createdAt: new Date(),
                updatedAt: null,
            });
            //assign role
            await user_role.create({
                UserId: user_created.id,
                RoleId: 2
            });
            console.log(user_created.id)
            //send message
            await AuthRepository.sendSMS(user.personalNumber,`Wellcome to ICT ACR, Link: www.acr.ictd.gov.bd Your user ID: ${user.idNo} for login `)
            AuthRepository.sendMail(user.personalMail,`Wellcome to ICT ACR, Link: www.acr.ictd.gov.bd Your user ID: ${user.idNo} for login`);
            return user_created;
        }catch (error){
            console.log(error)
        }
    }

    async updateUser(id, user) {
        return await User.update({
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
            updatedAt: new Date(),
        },{
            where: {
                idNo: id
            }
        })
    }

    async deleteUser(id) {
        await user_role.destroy({where:{UserId:id}});
        return await User.destroy({
            where: {
                id: id
            }
        })
    }

    async upload_image(user_id, body){
        const name = new Date().getTime();
        const user = await User.findOne({
            where: {
                idNo: user_id
            }
        });
        if(!user){
            return "no_user";
        }
        switch(true){
            case body.hasOwnProperty('profile') && body.hasOwnProperty('signature'):
                if(user.profileImage == null && user.signature == null){
                    //save image
                    this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
                    this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
                    //update in database
                    User.update({
                            profileImage: "/file/profile_pic/"+ name + "pic.png",
                            signatureImage: "/file/signature_pic/"+ name + "sig.png",
                            updatedAt: new Date(),
                        },{
                            where: {
                                idNo: user_id
                            }
                        });
                    return {
                        profileImage: "/file/profile_pic/"+ name + "pic.png",
                        signatureImage: "/file/signature_pic/"+ name +"sig.png",
                    };
                }else {
                    //delete previous image
                    this.deleteImage(user.profileImage);
                    this.deleteImage(user.signatureImage);
                    //save image
                    this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
                    this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
                    //update in databases
                    User.update({
                        profileImage: "/file/profile_pic/"+ name + "pic.png",
                        signatureImage: "/file/signature_pic/"+ name + "sig.png",
                        updatedAt: new Date(),
                    },{
                        where: {
                            idNo: user_id
                        }
                    });
                    return {
                        profileImage: "/file/profile_pic/"+ name + "pic.png",
                        signatureImage: "/file/signature_pic/"+ name +"sig.png",
                    };
                }
            case body.hasOwnProperty('profile'):
                if(user.profileImage == null){
                    //save image
                    this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
                    //update in database
                    User.update({
                            profileImage: "/file/profile_pic/"+ name + "pic.png",
                            updatedAt: new Date(),
                        },{
                            where: {
                                idNo: user_id
                            }
                        });
                    return {
                        profileImage: "/file/profile_pic/"+ name + "pic.png"
                    };
                }else {
                    //delete previous image
                    this.deleteImage(user.profileImage);
                    //save image
                    this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
                    //update in databases
                    User.update({
                        profileImage: "/file/profile_pic/"+ name + "pic.png",
                        updatedAt: new Date(),
                    },{
                        where: {
                            idNo: user_id
                        }
                    });
                    return {
                        profileImage: "/file/profile_pic/"+ name + "pic.png",
                    };
                }
            case body.hasOwnProperty('signature'):
                if(user.signature == null){
                    //save image
                    this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
                    //update in database
                    User.update({
                            signatureImage: "/file/signature_pic/"+ name + "sig.png",
                            updatedAt: new Date(),
                        },{
                            where: {
                                idNo: user_id
                            }
                        });
                    return {
                        signatureImage: "/file/signature_pic/"+ name +"sig.png",
                    };
                }else {
                    //delete previous image
                    this.deleteImage(user.signatureImage);
                    //save image
                    this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
                    //update in databases
                    User.update({
                        signatureImage: "/file/signature_pic/"+ name + "sig.png",
                        updatedAt: new Date(),
                    },{
                        where: {
                            idNo: user_id
                        }
                    });
                    return {
                        signatureImage: "/file/signature_pic/"+ name +"sig.png",
                    };
                }
        }
        // if(user.profileImage == null){
            
        //     //save image
        //     this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
        //     this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
        //     //update in database
        //     User.update({
        //             profileImage: "/file/profile_pic/"+ name + "pic.png",
        //             signatureImage: "/file/signature_pic/"+ name + "sig.png",
        //             updatedAt: new Date(),
        //         },{
        //             where: {
        //                 idNo: user.idNo
        //             }
        //         });
        //     return {
        //         profileImage: "/file/profile_pic/"+ name + "pic.png",
        //         signatureImage: "/file/signature_pic/"+ name +"sig.png",
        //     };
        // }else {
        //     //delete previous image
        //     this.deleteImage(user.profileImage);
        //     this.deleteImage(user.signatureImage);
        //     //save image
        //     this.saveBase64Image(body.profile,"./images/profile_pic/"+ name + "pic.png")
        //     this.saveBase64Image(body.signature,"./images/signature_pic/"+ name + "sig.png")
        //     //update in databases
        //     User.update({
        //         profileImage: "/file/profile_pic/"+ name + "pic.png",
        //         signatureImage: "/file/signature_pic/"+ name + "sig.png",
        //         updatedAt: new Date(),
        //     },{
        //         where: {
        //             idNo: user.idNo
        //         }
        //     });
        //     return {
        //         profileImage: "/file/profile_pic/"+ name + "pic.png",
        //         signatureImage: "/file/signature_pic/"+ name +"sig.png",
        //     };
        // }
        
    }

    saveBase64Image(base64String, filename) {
        // Remove the data:image/jpeg;base64 part
        const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
        
        // Convert Base64 to a buffer
        const imageBuffer = Buffer.from(base64Data, 'base64');
        
        // Save the buffer to a file
        fs.writeFileSync(filename, imageBuffer);
    }

    deleteImage(path){
        var path = path.slice(6);
        fs.unlink("images/"+path, (error) => {
            if(error){
                console.log(error);
                return 0;
            }else{
                return 1;
            }
        })
    }
}

module.exports = new UserRepository();