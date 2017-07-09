const nodemailer = require('nodemailer');

require('dotenv').config();


function handleSayHello(req, res, next) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `portfolio contact`,
    text: `Name: ${req.body.name} 
           Email: ${req.body.email} 
           Message: ${req.body.message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ yo: 'error' });
    } else {
      console.log(`Message sent: ${info.response}`);
      res.json({ yo: info.response });
    }
  });
  return next();
}

module.exports = {
  handleSayHello,
};

