const express = require('express');
const router = express.Router();
const produtoMenuGatoController = require ('../controllers/produtoMenuGatoController');

router.get('/', produtoMenuGatoController.produtosParaGato);



module.exports = router;