const sequelize = require("sequelize");
const connection = require("../database/database")
const Categoria = require("./Categoria");

const Produto = connection.define(
    'tbl_produto',
    {
        codigo_produto: {
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },
        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

Produto.sync({ force: false })

module.exports = Produto