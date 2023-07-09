const { Router } = require('express');

const checkForgotSession = (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ id });
};

module.exports = Router().get('/:id', checkForgotSession);
