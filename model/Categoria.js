const sequelize = require("sequelize");
const connection = require("../database/database");
const Produto = require("./Produto");

const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

// Categoria.belongsTo(Produto, {
//     constraint: true,
//     foreignKey: 'codigo_categoria'
// })

Categoria.sync({ force: false })

module.exports = Categoria