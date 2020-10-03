const express = require('express');
const router = express.Router();

const paginaAlterarEnderecoController = require('../controllers/paginaAlterarEnderecoController');

router.get('/', paginaAlterarEnderecoController.paginaAlterarEndereco);
module.exports = router;