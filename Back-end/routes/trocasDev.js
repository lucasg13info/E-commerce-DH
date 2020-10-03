const express = require('express');
const router = express.Router();
const trocasDevController = require ('../controllers/trocasDevController');

router.get('/trocasDev', trocasDevController.trocasDev);

module.exports = router;