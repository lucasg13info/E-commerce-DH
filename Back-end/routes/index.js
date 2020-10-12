const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index); 
router.get('/search', indexController.search);

// CADASTRAR PRODUTO - ROTA
// router.get('/cadastrarProduto', indexController.bulkCreate);
// router.post('/cadastrarProduto', indexController.bulkCreate);

// Criar View com formulario de cadstro de produto apenas para os devs efetuarem cadastro de materiais.


module.exports = router;
