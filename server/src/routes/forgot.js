const { Router } = require('express');

module.exports = Router().get('/', () => console.log('hit'));
