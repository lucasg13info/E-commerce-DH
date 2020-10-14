const express = require('express');
const router = express.Router();
const produtoMenuPeixeController = require ('../controllers/produtoMenuPeixeController');

router.get('/', produtoMenuPeixeController.produtosParaPeixe);



module.exports = router;