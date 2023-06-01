import {getExample} from "awesome-phonenumber";

export function handleCountryCodeChange(newCountryCode, data, setData, setExample) {
  data.countryCode = `+${newCountryCode.callingCode}`;
  data.contact = '';
  setData(data);
  setExample(getExampleSignificant(newCountryCode));
  console.log(data)
}

export const getExampleSignificant = (country) => {
  let countryCode = country.cca2; // two-character country code e.g. IN,PK
  let numberE164 = getExample(countryCode, 'mobile').number.e164;
  let callingCode = country.callingCode[0]; // international calling code e.g. 91,92
  console.log(numberE164)
  console.log(callingCode)
  return numberE164.replace(`+${callingCode}`, '');
}
