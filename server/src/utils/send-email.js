const nodemailer = require('nodemailer');
const config = require('config');

const smtpSettings = config.get('smtp');

module.exports = async function sendEmail({ email, body, subject }) {
  const transporter = nodemailer.createTransport(smtpSettings);
  try {
    const mail = await transporter.sendMail({
      from: '"HelpMeDude! - Shelter" <helpmedude@shelter.com>',
      to: email,
      subject: subject || 'HelpMeDude! - Shelter',
      html: `<h1>${body}</h1>`,
    });
    return mail;
  } catch (error) {
    throw new Error(error);
  }
};
