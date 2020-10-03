const express = require('express');
const router = express.Router();
const paginaFinalizarPedidoController = require ('../controllers/paginaFinalizarPedidoController');

router.get('/', paginaFinalizarPedidoController.paginaFinalizarPedido);

module.exports = router;