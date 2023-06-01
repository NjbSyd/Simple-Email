import axios from "axios";

// send mail via nodemailer
export function sendMailViaNodeMailer(contact, email, message, name) {
  return new Promise(async (resolve, reject) => {
    await axios.post("https://rn-mailer.onrender.com/mail", {
      to: "tcanjb@gmail.com",
      subject: "Contact Us",
      body: {
        name: name,
        contact: contact,
        email: email,
        message: message,
      },
    }).then(r => {
      resolve(r);
    }).catch(e => {
      reject(e);
    });
  });
}