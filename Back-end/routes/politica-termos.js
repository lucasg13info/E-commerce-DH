const express = require('express');
const router = express.Router();

const politicaTermosController = require('../controllers/politica-termosController');

router.get('/politicaTermos', politicaTermosController.politicaTermos);

module.exports = router;