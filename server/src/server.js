const express = require('express');
const config = require('config');
const helmet = require('helmet');
const routes = require('./routes');

const PORT = config.get('port');

express()
  .use(express.json())
  .use(helmet())
  .use('/api', routes)
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
