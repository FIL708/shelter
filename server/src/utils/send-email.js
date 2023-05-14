const nodemailer = require('nodemailer');
const config = require('config');

const smtpSettings = config.get('smtp');

module.exports = async function sendEmail(email, body) {
  try {
    const transporter = nodemailer.createTransport(smtpSettings);
    const info = transporter.sendMail({
      from: 'HelpMeDude! - Shelter',
      to: email,
      subject: 'Test subject',
      text: body,
    });

    console.log(info);
  } catch (error) {
    console.log(error);
  }
};
