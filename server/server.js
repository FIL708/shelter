const express = require('express');
const routes = require('./routes');

express()
  .use(express.json())
  .use('/api', routes)
  .listen(3500, () => console.log('Server started at: 3500'));
