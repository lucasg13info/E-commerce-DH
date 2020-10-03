const express = require('express');
const router = express.Router();
const paginaLoginController = require ('../controllers/paginaLoginController');

router.get('/paginaLogin', paginaLoginController.paginaLogin);

module.exports = router;