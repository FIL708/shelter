module.exports = function (req, res) {
  console.log(req.session.passport);
  if (req.session.passport) {
    res.status(200).json(req.session.passport.user);
  }
  return res.status(200).json({ message: 'Not-logged' });
};
