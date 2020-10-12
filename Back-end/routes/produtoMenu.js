const express = require('express');
const router = express.Router();
const produtoMenuController = require ('../controllers/produtoMenuController');

router.get('/cachorro', produtoMenuController.produtosParaCachorro);
router.get('/gato', produtoMenuController.produtosParaGato);
router.get('/passaro', produtoMenuController.produtosParaPassaros);
router.get('/peixe', produtoMenuController.produtosParaPeixes);

module.exports = router;