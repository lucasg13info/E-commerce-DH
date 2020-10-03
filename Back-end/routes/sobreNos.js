const express = require('express');
const router = express.Router();

const sobreNosController = require('../controllers/sobreNosController');

router.get('/', sobreNosController.sobreNos);

module.exports = router;