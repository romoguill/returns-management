const Movement = require('../models/movement');
const ClientProfile = require('../models/clientProfile');

async function getMovements(req, res) {
  const movements = await Movement.fetchAll();

  const unsettledMovements = await Movement.getAllUnsettledOutboundMovements();
  for (let m of unsettledMovements) {
    const movement = new Movement(
      m.productId,
      m.client,
      m.flow,
      m._id,
      m.status,
      m.date
    );

    updateStatus(movement);
  }

  res.render('movements', { movements });
}

async function updateStatus(movement) {
  const profile = await ClientProfile.fetchProfile(movement.client);
  const status = movement.calculateStatus(profile);
  console.log(status);
}

async function createMovement(req, res) {
  const { productId, client, flow } = req.body;
  const movement = new Movement(productId, client, flow);

  // Check if movement is ibound. If that's the case then update the first unsettled outbound movement to a "recieved" status.
  if (flow === 'Inbound') {
    const firstUnsettledOutboundMovement =
      await Movement.getFirstUnsettledOutboundMovement(productId, client);
    if (firstUnsettledOutboundMovement) {
      firstUnsettledOutboundMovement.status = 'Recieved';
      movement.status = 'Settled';
  } else {
    movement.status = movement.calculateStatus();
  }

  console.log(movement, firstUnsettledOutboundMovement);
  // await movement.save();
  res.redirect('/movements');
}

module.exports = {
  getMovements,
  createMovement,
};
