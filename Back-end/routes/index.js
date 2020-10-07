const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index); 

// CADASTRAR PRODUTO - ROTA
// router.get('/cadastrarProduto', indexController.bulkCreate);
// router.post('/cadastrarProduto', indexController.bulkCreate);

// Criar View com formulario de cadstro de produto apenas para os devs efetuarem cadastro de materiais.


// router.get('/search', indexController.search);

module.exports = router;
