const ClientProfile = require('../models/clientProfile');

async function renderConfiguration(req, res) {
  const clientProfiles = await ClientProfile.fetchAll();
  res.render('configuration', { clientProfiles });
}

async function getClientProfiles(req, res) {
  const clientProfiles = await ClientProfile.fetchAll();
  console.log(clientProfiles);
  // res.render('configuration', { clientProfiles });
  res.json(clientProfiles);
}

async function getSingleClientProfile(req, res) {
  const profile = new ClientProfile(null, null, req.params.id);
  const clientProfile = await profile.fetchProfile();
  res.json(clientProfile);
}

async function createClientProfile(req, res) {
  const { client, config } = req.body;
  const clientProfile = new ClientProfile(client, config);
  const result = await clientProfile.save();
  res.json(result);
}

async function updateClientProfile(req, res) {
  const { client, config } = req.body;
  const clientProfile = new ClientProfile(client, config, req.params.id);
  const result = await clientProfile.save();
  res.json(result);
}

async function deleteClientProfile(req, res) {
  const clientProfile = new ClientProfile(null, null, req.params.id);
  const result = await clientProfile.delete();
  res.json(result);
}

module.exports = {
  renderConfiguration,
  getClientProfiles,
  getSingleClientProfile,
  createClientProfile,
  updateClientProfile,
  deleteClientProfile,
};
