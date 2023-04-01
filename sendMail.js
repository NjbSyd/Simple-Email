const nodemailer = require("nodemailer");

const sendMail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "nawazkhan6393@gmail.com",
        pass: "xhsgpukeogacflml",
      },
    });

    const mailOptions = {
      from: "nawazkhan6393@gmail.com",
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
