const express = require("express");
const app = express();

app.use(express.json());

const connection = require("./database/database");

const produtoController = require("./controller/Produto");
app.use("/", produtoController);

const categoriaController = require("./controller/Categoria");
app.use("/", categoriaController);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO NA PORTA: http://localhost:3000')
});