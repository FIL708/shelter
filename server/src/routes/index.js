const { Router } = require('express');
const bcrypt = require('bcrypt');
const status = require('./status.js');
const adoption = require('./adoption.js');
const photo = require('./photo.js');
const user = require('./user.js');
const auth = require('./auth.js');
const sendEmail = require('../utils/send-email.js');

module.exports = Router()
  .get('/status', status)
  .use('/adoption', adoption)
  .use('/photo', photo)
  .use('/user', user)
  .use('/auth', auth)
  .get('/test', async (req, res) => {
    try {
      const mail = await sendEmail({
        to: 'asd@asd.com',
        template: 'password',
        context: { name: 'Filip' },
      });
      console.log(mail);

      return res.status(200).send('send');
    } catch (error) {
      return res.status(500).json('error');
    }
  })
  .post('/test', async (req, res) => {
    const { password } = req.body;
    console.log(req.body);
    const hash = await bcrypt.hash(password, 10);
    console.log();

    return res.send(hash);
  });
