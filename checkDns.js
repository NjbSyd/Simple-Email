const dns = require('dns');

function checkDomainValidity(domain) {
  return new Promise((resolve, reject) => {
    dns.lookup(domain, (err, address, family) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = checkDomainValidity;