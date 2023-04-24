const { Router } = require('express');
const bcrypt = require('bcrypt');
const status = require('./status.js');
const adoption = require('./adoption.js');
const photo = require('./photo.js');
const user = require('./user.js');
const auth = require('./auth.js');

module.exports = Router()
  .get('/status', status)
  .use('/adoption', adoption)
  .use('/photo', photo)
  .use('/user', user)
  .use('/auth', auth)
  .post('/test', async (req, res) => {
    // const { password } = req.body;
    // console.log(req.body);
    // const hash = await bcrypt.hash(password, 10);
    // console.log();

    // return res.send(hash);
    const ress = await bcrypt.compare(
      'admin4013',
      '$2b$10$0ceY9JU6gNkU/aXa8Gr8hejCAAXTK8MPUGTFBppj..D6pawA2fBMu',
    );
    console.log(ress);
    res.end();
  });
