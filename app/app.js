const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.post('/sendmail', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: 'jeffhernandez89@gmail.com',
    to: 'drumstix@gmail.com',
    subject: 'PORTFOLIO EMAIL',
    text: 'That was easy!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});

app.use('*', (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public'),
  });
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
