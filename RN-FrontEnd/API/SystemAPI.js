import * as MailComposer from "expo-mail-composer";


// Send mail via inbuilt app
export function sendMailViaInbuildApp() {
  MailComposer.composeAsync({
    recipients: ['tcanjb@gmail.com'],
    subject: 'Contact Us',
    body: `Name: ${name} \n\nContact: ${contact} \n\nEmail: ${email} \n\nMessage:\n ${message}`
  }).then(r => console.log(r)).catch(e => console.log(e));
}