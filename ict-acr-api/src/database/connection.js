const { Sequelize } = require('sequelize');

//MySQL details
module.exports = async() => {
    /*const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
        host: DB_URL,
        dialect: 'mysql'
    });*/
    const sequelize = new Sequelize("ict_acr", "fuad", "esscsmfu2", {
        host: "localhost",
        dialect: 'mysql'
    });

    try {
        // mysql.createConnection({
        //     host: DB_URL,
        //     user: USER,
        //     password: PASSWORD,
        //     database: DATABASE,
        //     multipleStatements: true
        // });
        await sequelize.authenticate();
        console.log("DB Connected");
    } catch (error){
        console.log("Error===========")
        console.log(error)
        process.exit(1);
    }

}