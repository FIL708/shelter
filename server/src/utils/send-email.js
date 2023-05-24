const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const config = require('config');

const smtpSettings = config.get('smtp');
const URL = config.get('clientUrl');

const viewPath = path.resolve(__dirname, '../emails/');
const partialsPath = path.resolve(__dirname, '../emails/partials');

module.exports = async function sendEmail({ to, subject, template, context }) {
  const transporter = nodemailer.createTransport(smtpSettings);

  transporter.use(
    'compile',
    hbs({
      viewEngine: {
        extname: '.hbs',
        layoutsDir: viewPath,
        defaultLayout: false,
        partialsDir: partialsPath,
      },
      viewPath,
      extName: '.hbs',
    }),
  );

  const templateVariables = { URL, ...context };

  try {
    const mail = await transporter.sendMail({
      from: '"HelpMeDude! - Shelter" <helpmedude@shelter.com>',
      to,
      subject: subject || 'HelpMeDude! - Shelter',
      template,
      context: templateVariables,
    });
    return mail;
  } catch (error) {
    console.log(error);
  }
};
