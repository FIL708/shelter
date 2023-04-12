const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

express()
  .use(express.json())
  .use(helmet())
  .use('/api', routes)
  .listen(3500, () => console.log('Server started at: 3500'));
