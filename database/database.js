// IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require('sequelize')

// CRIAÇÃO DA CONEXÃO COM O BANCO DE DADOS COM O SEQUELIZE
const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host: "localhost",
        porta: "3306",
        dialect: "mysql",
        timezone: "-03:00"
    }
)

module.exports = connection;