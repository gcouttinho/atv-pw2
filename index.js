// IMPORTAÇÃO DO MÓDULO EXPRESS
const express = require('express');

// IMPORTAÇÃO DO ARQUIVO DE MODEL DA TABELA
// const Categoria = require("./model/Categoria")

// INSTÂNCIA DO MÓDULO EXPRESS 
const app = express();

// CONFIGURAÇÃO PARA O EXPRESS MANIPULAR JSON
app.use(express.json());

// CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM DADOS DE FORMULÁRIO
app.use(express.urlencoded({extended:true}));

//IMPORTACAO DA CONTROLLER CATEGORIA
const categoriaController = require("./controller/Categoria");
app.use("/", categoriaController);

// TESTE DE CONEXÃO

/* const connection = require('./database/database.js')
console.log(connection) */

// CRIAÇÃO DO SERVIDOR WEB DE REQUISIÇÕES E RESPOSTAS
app.listen(3000, ()=>{
    console.log("API LIVRARIA RODANDO EM: http://localhost:3000");
});
