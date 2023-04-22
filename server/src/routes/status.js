module.exports = function (req, res) {
  console.log(req);
  return res.status(200).json({ message: 'ok' });
};
