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

async function createClientProfile(req, res) {
  const { client, config } = req.body;
  const clientProfile = new ClientProfile(client, config);
  const result = await clientProfile.save();
  res.json(result);
}

async function deleteClientProfile(req, res) {
  const clientProfile = new ClientProfile(null, null, req.params.id);
  await clientProfile.delete();
  const clientProfiles = await ClientProfile.fetchAll();
  res.json(clientProfiles);
}

module.exports = {
  renderConfiguration,
  getClientProfiles,
  createClientProfile,
  deleteClientProfile,
};
