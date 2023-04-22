module.exports = function (req, res) {
  if (req.session.passport) {
    return res.status(200).json({ user: req.session.passport.user });
  }
  return res.status(200).json({ message: 'Not-logged' });
};
