function get404(req, res, next) {
  res.status(404).render('errors/404');
}

module.exports = {
  get404,
};
