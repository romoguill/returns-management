const express = require('express');

const router = express.Router();

router.get('/configuration', (req, res) => {
  res.render('configuration');
});

module.exports = router;
