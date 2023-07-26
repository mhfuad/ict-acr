
const { User, Role, Permission } = require('../models');
const bcrypt = require('bcrypt');
const fs = require('fs');

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

    async createUser(user) {
        this.saveBase64Image(user.profileImage,"./images/profile_pic/"+user.idNo+"pic.png")
        this.saveBase64Image(user.signatureImage,"./images/signature_pic/"+user.idNo+"sig.png")

        try{
            return await User.create({
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