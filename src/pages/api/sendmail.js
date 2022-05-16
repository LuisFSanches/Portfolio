// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
const express = require("express");


export default function sendMail(req, res) {
  const cors = require("cors");
  const app = express();

  const { google } = require('googleapis');
  const { OAuth2 } = google.auth; 

    app.use(cors());
    app.use(express.json());

    const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENTID,
      process.env.GMAIL_CLIENTSECRET,
      OAUTH_PLAYGROUND
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESHTOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      port: 465,    
      host: "smtp.gmail.com",
      secure: true,
         auth: {
          type: 'OAuth2',
        user: process.env.GMAIL_ACC,
        clientId: process.env.GMAIL_CLIENTID,
        clientSecret: process.env.GMAIL_CLIENTSECRET,
        refreshToken: process.env.GMAIL_REFRESHTOKEN,
        accessToken: process.env.GMAIL_ACCESSTOKEN,
        accessToken,
              
           }
    });

    const mailData = {
      from: process.env.GMAIL_ACC,
      to: process.env.GMAIL_ACC,
      subject: `Mensagem De: ${req.body.name}`,
      text: req.body.message + " | Enviado De: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Enviado De: ${req.body.email}</p>`
  };

    transporter.sendMail(mailData, function (err, info)  {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("Email Enviado");
        res.send("sucesso");
      }
  });
}
