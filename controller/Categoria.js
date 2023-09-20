
const express = require("express");

const categoriaModel = require("../model/Categoria");

const router = express.Router();

//ROTA DE INSERÇÃO DE CATEGORIA

router.post("/categoria/cadastrarCategoria", (req, res)=>{

    let {nome_categoria} = req.body;

    //console.log(req.body)

    categoriaModel.create({nome_categoria})
    .then(()=>{
        return res.status(201).json({
            errorStatus:false,
            messageStatus: "Categoria inserida com sucesso!"
        })
    })
    .catch(((error)=>{
        return res.status(500).json({
            errorStatus:true,
            messageStatus: error
        });
    }));
});

module.exports = router;