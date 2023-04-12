const { Router } = require('express');
const status = require('./status.js')

module.exports = Router().get("/status", status)