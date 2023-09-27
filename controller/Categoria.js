const express = require("express");
const categoriaModel = require("../model/Categoria");
const router = express.Router();

router.get("/categoria", (req, res) => {
    res.send('Rota raiz de categorias');
});

router.post("/categoria/cadastrarCategoria", (req, res) => {
    let { nome_categoria, observacoes_categoria } = req.body;

    console.log(req.body)

    categoriaModel.create({ nome_categoria, observacoes_categoria })
        .then(() => {
            return res.status(201).json({
                errorStatus: false,
                messageStatus: `Categoria ${nome_categoria} inserida com sucesso!`
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });
});

router.get("/categoria/listarCategoria", (req, res) => {
    categoriaModel.findAll()
    .then((categoria) => {
        res.status(200).json({
            errorStatus: false,
            messageStatus: "categorias listadas com sucesso",
            categoria: categoria,
        });
    })
    .catch((error) => {
        res.status(500).json({
            errorStatus: true,
            messageStatus: error.message,
        });
    });
});

router.put("/categoria/alterarCategoria", (req, res) => {
    res.send('Categoria alterada com sucesso');
});

router.delete("/categoria/excluirCategoria", (req, res) => {
    res.send('Categoria excluída com sucesso');
});

module.exports = router;