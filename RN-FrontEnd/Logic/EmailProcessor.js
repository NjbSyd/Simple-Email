import {validateContact, validateEmail, validateName} from "./Validator";
import {parsePhoneNumber} from "awesome-phonenumber";
import {Alert} from "react-native";
import {sendMailViaNodeMailer} from "../API/NodeMailerAPI";
import {validateDomain} from "../API/DomainVerification";

let name, email, contact, message;

export async function SubmitData(data, setIsLoading) {
  name = data.name
  email = data.email
  contact = data.countryCode + data.contact
  message = data.message

  // check if all fields are valid
  if (!(validateName(name) && validateContact(contact) && validateEmail(email) && message.length > 0)) {
    setIsLoading(false);
    Alert.alert('Invalid Input', 'Please check your input and try again', [{text: 'OK'}]);
    return;
  }

  // check if email domain is valid using dns. Not 100% accurate but good enough
  let continueExecution = true;
  await validateDomain(email.split('@')[1]).then(r => {
    console.log(r, "response from validateDomain function in EmailProcessor.js")
    continueExecution = r;
  }).catch(e => {
    console.log(e, "error from validateDomain function in EmailProcessor.js inside then")
    continueExecution = false;
  });

  if (!continueExecution) {
    setIsLoading(false);
    Alert.alert('Invalid Input', 'Please check your input and try again', [{text: 'OK'}]);
    return;
  }

  // after all checks are passed, format the data and send it
  contact = formatPhoneNo(contact);
  message = formatGeneral(message);
  name = formatGeneral(name);
  sendMailViaNodeMailer(contact, email, message, name).then(r => {
    setIsLoading(false);
    Alert.alert('Success', 'Your message has been sent', [{text: 'OK'}]);
  }).catch(e => {
    setIsLoading(false);
    Alert.alert('Error', 'Something went wrong. Please try again', [{text: 'OK'}]);
  });
}

function formatPhoneNo(phoneNo) {
  return parsePhoneNumber(phoneNo).number.international;
}

function formatGeneral(text) {
  text = text.trim();
  text = text.split(' ');
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');
}
