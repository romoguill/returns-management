const express = require('express');

const clientProfileController = require('../controllers/clientProfileController');

const router = express.Router();

router.get('/configuration', clientProfileController.getClientProfiles);

router.post('/configuration', clientProfileController.createClientProfile);

router.post(
  '/configuration/:id/delete',
  clientProfileController.deleteClientProfile
);

module.exports = router;
