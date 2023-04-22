const config = require('config');

const serverUrl = config.get('serverUrl');

module.exports = function (req, res) {
  if (req.session.passport) {
    return res.status(200).json({
      status: 'Authenticated',
      user: req.session.passport.user,
      serverUrl,
    });
  }
  return res.status(200).json({ status: 'Not authenticated', serverUrl });
};
