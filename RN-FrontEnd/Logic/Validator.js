import {parsePhoneNumber} from 'awesome-phonenumber'

export async function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

export function validateContact(phone) {
  console.log(phone)
  if (parsePhoneNumber(phone).valid) {
    console.log('Phone valid')
    return true;
  }
  console.log('Phone invalid')
  return false;
}

export function validateName(name) {
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  return nameRegex.test(name);
}

