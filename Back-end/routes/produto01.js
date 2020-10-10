const express = require('express');
const router = express.Router();
const produto01Controller = require ('../controllers/produto01Controller');

// router.get('/', produto01Controller.produto01);
router.get('/:id', produto01Controller.findById);

module.exports = router;