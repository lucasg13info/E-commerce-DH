const express = require('express');
const router = express.Router();

const politicaTermosController = require('../controllers/politica-termosController');

router.get('/', politicaTermosController.politicaTermos);

module.exports = router;