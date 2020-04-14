const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASS,
  },
});

let mailOptions = {
  from: process.env.EMAIL_SENDER,
  to: 'daniloalbudane@gmail.com',
  subject: 'EMAIL VIA NODE!',
  html: `
    <div style="text-align: center;">
      <h1>Aproveitando pra testar HTML aqui!</h2>
      <p>Está tudo centralizado?</p>
      <p style="color: red;">Este texto está vermelho?</p>
      <p>Fim do email.</p>
    </div>
  `,
};

transporter.sendMail(mailOptions, (error, data) => {
  if (error) {
    return console.log('Error sending email: ', error);
  }
  return console.log('Email sent!!');
});
