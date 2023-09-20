const sequelize = require("sequelize");

const connection = new sequelize(
    "atv_pw2",
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        timezone: "-03:00"
    }
);

module.exports = connection;