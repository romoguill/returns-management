const Movement = require('../models/movement');

async function getMovements(req, res) {
  const movements = await Movement.fetchAll();
  res.render('movements', { movements: movements });
}

async function createMovement(req, res) {
  const { productId, client, flow } = req.body;
  const movement = new Movement(productId, client, flow);
  await movement.create();
  res.redirect('/movements');
}

module.exports = {
  getMovements,
  createMovement,
};
