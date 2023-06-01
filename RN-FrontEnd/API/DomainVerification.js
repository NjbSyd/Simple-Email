import axios from "axios";

export async function validateDomain(domain): Promise<boolean> {
  let validity = false;
  await axios.post("https://rn-mailer.onrender.com/dns", {
    domain: domain
  }).then(r => {
    let {domainValid} = r.data;
    validity = domainValid;
  }).catch(e => {
    validity = false;
  });
  return validity;
}