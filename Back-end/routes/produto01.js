const express = require('express');
const router = express.Router();
const produto01Controller = require ('../controllers/produto01Controller');

router.get('/', produto01Controller.produto01);

module.exports = router;