const express = require('express');
const router = express.Router();
const produtoMenuCachorroController = require ('../controllers/produtoMenuCachorroController');

router.get('/', produtoMenuCachorroController.produtosParaCachorro);



module.exports = router;