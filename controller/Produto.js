const express = require("express");
const produtoModel = require("../model/Produto");
const router = express.Router();

router.get("/produto", (req, res) => {
    res.send('Rota raiz de produtos');
});

router.post("/produto/cadastrarProduto", (req, res) => {
    let { nome_produto, valor_produto, imagem_produto, descricao_produto } = req.body;

    console.log(req.body)

    produtoModel.create({ nome_produto, valor_produto, imagem_produto, descricao_produto })
        .then(() => {
            return res.status(201).json({
                errorStatus: false,
                messageStatus: "Produto inserido com sucesso!"
            })
        })
        .catch(((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        }));
});

router.get("/produto/listarProdutos", (req, res) => {
    produtoModel.findAll()
        .then((produtos) => {
            res.status(200).json({
                errorStatus: false,
                messageStatus: "Produtos listados com sucesso",
                produtos: produtos,
            });
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error.message,
            });
        });
});

router.put("/produto/alterarProduto", (req, res) => {
    res.send('Produto alterado com sucesso');
});

router.delete("/produto/excluirProduto", (req, res) => {
    res.send('Produto excluído com sucesso');
});

module.exports = router;