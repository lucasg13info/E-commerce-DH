const express = require('express');
const router = express.Router();
const paginaLoginController = require ('../controllers/paginaLoginController');

router.get('/', paginaLoginController.paginaLogin);
// router.post('/', paginaLoginController.store);


module.exports = router;