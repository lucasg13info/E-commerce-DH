const express = require('express');
const router = express.Router();

const paginaAlterarEnderecoController = require('../controllers/paginaAlterarEnderecoController');

router.get('/', paginaAlterarEnderecoController.create); // ok
router.post('/', paginaAlterarEnderecoController.store); // ok

module.exports = router;