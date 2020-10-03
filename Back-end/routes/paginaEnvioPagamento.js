const express = require('express');
const router = express.Router();
const paginaEnvioPagamentoController = require ('../controllers/paginaEnvioPagamentoController');

router.get('/paginaEnvioPagamento', paginaEnvioPagamentoController.paginaEnvioPagamento);

module.exports = router;