const express = require('express');

const movementsController = require('../controllers/movementsController');

const router = express.Router();

router.get('/movements', movementsController.getMovements);

router.post('/movements', movementsController.createMovement);

module.exports = router;
