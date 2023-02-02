//import nodemailer
const nodemailer = require('nodemailer');
//constraseña aplicacion
require('dotenv').config();

//creamos nuestro trasnportador

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth:{
    user: "wolfgang.ra2@gmail.com",
    pass: process.env.G_PASSWORD,
  }
});

module.exports = transporter;