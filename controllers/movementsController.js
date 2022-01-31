const Movement = require('../models/movement');
const ClientProfile = require('../models/clientProfile');

async function getMovements(req, res) {
  const movements = await Movement.fetchAll();

  for (let m of movements) {
    const movement = new Movement(
      m.productId,
      m.client,
      m.flow,
      m._id,
      m.status,
      m.date
    );
    const profile = await ClientProfile.fetchProfile(m.client);
    movement.calculateStatus(profile);
  }

  res.render('movements', { movements });
}

async function createMovement(req, res) {
  const { productId, client, flow } = req.body;
  const movement = new Movement(productId, client, flow);
  await movement.save();
  res.redirect('/movements');
}

module.exports = {
  getMovements,
  createMovement,
};
