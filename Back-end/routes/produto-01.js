const express = require('express');
const router = express.Router();
const produto01 = require ('../controllers/produto01Controller');

router.get('/produto01', produto01Controller.produto01);

module.exports = router;