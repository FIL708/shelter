module.exports = function (req, res) {
  console.log(req.session);

  return res.status(200).json({ message: 'ok' });
};
