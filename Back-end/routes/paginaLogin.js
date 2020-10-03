const express = require('express');
const router = express.Router();
const paginaLoginController = require ('../controllers/paginaLoginController');

router.get('/', paginaLoginController.paginaLogin);

module.exports = router;