const express = require('express');
const router = express.Router();
const produtoMenuPassaroController = require ('../controllers/produtoMenuPassaroController');

router.get('/', produtoMenuPassaroController.produtosParaPassaro);



module.exports = router;