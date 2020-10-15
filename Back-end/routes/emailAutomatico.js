const express = require('express');
const router = express.Router();
const emailAutomaticoController = require('../controllers/crudProdutoController')

// router.get('/emailEnviado', emailAutomaticoController.emailAutomatico)
router.post('/', emailAutomaticoController.store); 

module.exports = router;