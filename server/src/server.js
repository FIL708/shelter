const express = require('express');
const config = require('config');
const helmet = require('helmet');
const routes = require('./routes');
const authInit = require('./auth/initialization.js');

const PORT = config.get('port');

express()
  .use(express.json())
  .use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        'img-src': ["'self'", 'https: data:'],
      },
    }),
  )
  .use(authInit())
  .use('/api', routes)
  .use('/', express.static('./public'))
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
