const { Router } = require('express');
const status = require('./status.js');
const adoption = require('./adoption.js');
const photo = require('./photo.js');
const user = require('./user.js');
const auth = require('./auth.js');
const opinion = require('./opinion.js');

module.exports = Router()
  .get('/status', status)
  .use('/adoption', adoption)
  .use('/photo', photo)
  .use('/user', user)
  .use('/auth', auth)
  .use('/opinion', opinion);
