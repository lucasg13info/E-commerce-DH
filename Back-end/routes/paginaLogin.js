var express = require('express');
var router = express.Router();

const paginaLoginController = require ('../controllers/paginaLoginController');

router.get('/', paginaLoginController.paginaLogin);

router.get('/cadastro', paginaLoginController.paginaCadastro);
router.post('/cadastro', paginaLoginController.store);
router.post('/', paginaLoginController.login);

router.get('/logout', paginaLoginController.logout);


module.exports = router;