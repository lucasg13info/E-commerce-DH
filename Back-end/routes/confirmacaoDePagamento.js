const express = require('express');
const router = express.Router();
const confirmacaoDePagamentoController = require ('../controllers/confirmacaoDePagamentoController');

router.get('/', confirmacaoDePagamentoController.confirmacao);

module.exports = router;