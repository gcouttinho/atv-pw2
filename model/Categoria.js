// IMPORTAÇÃO DO MODULO DO SEQUELIZE
const sequelize = require('sequelize')

// IMPORTAÇÇAO DA CONEXÃO COM O BANCO DE DADOS
const connection = require("../database/database")

/*
MAPEAMENTO DA TABELA DE CATEGORIA
*/

/* PARAMETROS DO METODO DEFINE:

*/

const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria:{
            type: sequelize.STRING(250),
            allowNull: false
        }
    }

);

//SINCRONIZAÇÃO COM O BANCO DE DADOS - CREIA A TABELA CASO ESSA NÃO EXISTA

Categoria.sync({force:false});

module.exports = Categoria;