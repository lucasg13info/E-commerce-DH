const express = require('express');
const router = express.Router();
const paginaFinalizarPedidoController = require ('../controllers/paginaFinalizarPedidoController');

router.get('/paginaFinalizarPedido', paginaFinalizarPedidoController.paginaFinalizarPedido);

module.exports = router;