const express = require('express');
const router = express.Router();

var  multer   = require ('multer') 
var  upload  = multer ({dest: 'public/uploads/'})   

const crudProdutoController = require('../controllers/crudProdutoController')

/* GET users listing. */
router.get('/produtos', crudProdutoController.crudProduto); // ok
router.get('/ver/:id', crudProdutoController.findById); // ok
router.get('/pesquisar', crudProdutoController.search); // ok

router.get('/cadastro', crudProdutoController.create); // ok
router.post('/cadastro', upload.single("picture_product") , crudProdutoController.store); // ok

router.get('/editar/:id', crudProdutoController.edit);
router.put('/editar/:id', crudProdutoController.update);
router.delete('/deletar/:id', crudProdutoController.destroy);

module.exports = router;

