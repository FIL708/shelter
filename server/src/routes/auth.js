const { Router } = require('express');

module.exports = Router()
  .post('/login', (req, res) => console.log(req, res))
  .post('/register', (req, res) => console.log(req, res));
