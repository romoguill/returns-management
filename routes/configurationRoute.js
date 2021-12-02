const express = require('express');

const clientProfileController = require('../controllers/clientProfileController');

const router = express.Router();

router.get(
  '/configuration/api/profiles',
  clientProfileController.getClientProfiles
);

router.get('/configuration', clientProfileController.renderConfiguration);

router.post('/configuration', clientProfileController.createClientProfile);

router.post(
  '/configuration/:id/delete',
  clientProfileController.deleteClientProfile
);

module.exports = router;
