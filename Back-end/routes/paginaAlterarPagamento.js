const express = require('express');
const router = express.Router();

const paginaAlterarPagamentoController = require('../controllers/paginaAlterarPagamentoController')

router.get('/', paginaAlterarPagamentoController.paginaAlteraPagamento);

module.exports = router;