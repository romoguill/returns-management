const Movement = require('../models/movement');
const ClientProfile = require('../models/clientProfile');

async function getMovements(req, res) {
  const unsettledMovements = await Movement.getAllUnsettledOutboundMovements();

  let profile;
  for (let m of unsettledMovements) {
    const movement = new Movement(
      m.productId,
      m.client,
      m.flow,
      m._id,
      m.status,
      m.date
    );

    profile = await ClientProfile.fetchProfile(movement.client);

    // movement.updateStatus(profile);
  }

  const movements = await Movement.fetchAll();

  res.render('movements', { movements });
}

async function createMovement(req, res) {
  const { productId, client, flow } = req.body;
  const newMovement = new Movement(productId, client, flow);

  // Check if movement is inbound. If that's the case then update the first unsettled outbound movement to a "recieved" status.
  if (flow === 'Inbound') {
    let movement = await Movement.getFirstUnsettledOutboundMovement(
      productId,
      client
    );

    let firstUnsettledOutboundMovement;
    if (movement) {
      movement.status = 'Recieved';

      firstUnsettledOutboundMovement = new Movement(
        movement.productId,
        movement.client,
        movement.flow,
        movement._id,
        movement.status,
        movement.date
      );

      newMovement.status = 'Settled';
    } else {
      newMovement.status = newMovement.calculateStatus();
    }

    console.log(firstUnsettledOutboundMovement);
    console.log(newMovement);
    await firstUnsettledOutboundMovement.save();
    await newMovement.save();
    res.redirect('/movements');
  }
}

module.exports = {
  getMovements,
  createMovement,
};
