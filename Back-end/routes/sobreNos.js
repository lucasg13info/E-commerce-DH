const express = require('express');
const router = express.Router();

const sobreNosController = require('../controllers/sobreNosController');

router.get('/sobreNos', sobreNosController.sobreNos);

module.exports = router;