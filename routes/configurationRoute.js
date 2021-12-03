const express = require('express');

const clientProfileController = require('../controllers/clientProfileController');

const router = express.Router();

//////API

// Get all profiles
router.get(
  '/configuration/api/profiles',
  clientProfileController.getClientProfiles
);

// Get a single profile
router.get(
  '/configuration/api/profiles/:id',
  clientProfileController.getSingleClientProfile
);

// Create a new profile
router.post(
  '/configuration/api/profiles',
  clientProfileController.createClientProfile
);

// Update a single profile
router.patch(
  '/configuration/api/profiles/:id/edit',
  clientProfileController.updateClientProfile
);

// Delete a single profile
router.delete(
  '/configuration/api/profiles/:id/delete',
  clientProfileController.deleteClientProfile
);

router.get('/configuration', clientProfileController.renderConfiguration);

router.post('/configuration', clientProfileController.createClientProfile);

router.post(
  '/configuration/:id/delete',
  clientProfileController.deleteClientProfile
);

module.exports = router;
