const ClientProfile = require('../models/clientProfile');

async function getClientProfiles(req, res) {
  const clientProfiles = await ClientProfile.fetchAll();
  res.render('configuration', { clientProfiles });
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
}

module.exports = {
  getClientProfiles,
  createClientProfile,
  deleteClientProfile,
};
