const express = require('express');

const configurationController = require('../controllers/configurationController');

const router = express.Router();

//////API

// Get all profiles
router.get(
  '/configuration/api/profiles',
  configurationController.getClientProfiles
);

// Get a single profile
router.get(
  '/configuration/api/profiles/:id',
  configurationController.getSingleClientProfile
);

// Create a new profile
router.post(
  '/configuration/api/profiles',
  configurationController.createClientProfile
);

// Update a single profile
router.patch(
  '/configuration/api/profiles/:id/edit',
  configurationController.updateClientProfile
);

// Delete a single profile
router.delete(
  '/configuration/api/profiles/:id/delete',
  configurationController.deleteClientProfile
);

router.get('/configuration', configurationController.renderConfiguration);

router.post('/configuration', configurationController.createClientProfile);

router.post(
  '/configuration/:id/delete',
  configurationController.deleteClientProfile
);

module.exports = router;
