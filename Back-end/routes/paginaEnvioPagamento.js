const express = require('express');
const router = express.Router();
const paginaEnvioPagamentoController = require ('../controllers/paginaEnvioPagamentoController');

router.get('/', paginaEnvioPagamentoController.paginaEnvioPagamento);

module.exports = router;