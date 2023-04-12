const { Router } = require('express');
const status = require('./status.js');
const adoption = require('./adoption.js');

module.exports = Router().get('/status', status).use('/adoption', adoption);
