// var express = require('express');
// var router = express.Router();
// const crudProdutoController = require('../controllers/crudProdutoController');

// /* GET users listing. */
// router.get('/produtos', crudProdutoController.index);
// router.get('/ver/:id', crudProdutoController.findById);
// router.get('/pesquisar', crudProdutoController.search);

// router.get('/cadastro', crudProdutoController.create);
// router.post('/cadastro', crudProdutoController.store);

// router.get('/editar/:id', crudProdutoController.edit);
// router.put('/editar/:id', crudProdutoController.update);
// router.delete('/deletar/:id', crudProdutoController.destroy);

// module.exports = router;



const express = require('express');
const router = express.Router();
const crudController = require ('../controllers/crudProdutoController');

router.get('/', crudController.crudProduto);


module.exports = router;