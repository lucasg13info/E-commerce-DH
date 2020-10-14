const express = require('express');
const router = express.Router();

const paginaAlterarEnderecoController = require('../controllers/paginaAlterarEnderecoController');

router.get('/', paginaAlterarEnderecoController.createEndereco); // ok
router.post('/', paginaAlterarEnderecoController.storeEndereco); // ok

module.exports = router;