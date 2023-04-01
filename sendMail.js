const nodemailer = require("nodemailer");

const sendMail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.username,
        pass: process.env.password
      },
    });

    const mailOptions = {
      from: process.env.username,
      to: to,
      subject: subject,
      html: html,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      }
      resolve(info);
    });
  });
};

module.exports = sendMail;
