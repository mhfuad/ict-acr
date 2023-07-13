const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT,
    SOCKET_PORT: process.env.SOCKET_PORT,
    APP_SECRET: process.env.APP_SECRET,
    SMS_URL: process.env.SMS_URL,
    KEY: process.env.SMS_URL,
    VALUE: process.env.VALUE,
    SENDER_ID: process.env.SENDER_ID
};
