const express = require('express');
const router = express.Router();
const paginaLoginController = require ('../controllers/paginaLoginController');

router.get('/', paginaLoginController.paginaLogin);
router.post('/cadastro', paginaLoginController.store);


router.get('/cadastro', paginaLoginController.paginaCadastro);


module.exports = router;