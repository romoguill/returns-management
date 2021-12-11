const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/403', (req, res) => {
  res.render('403');
});

module.exports = router;
