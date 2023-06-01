const dns = require('dns');

function checkDomainValidity(domain) {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, address) => {
      if (err) {
        reject(false);
      } else if (address.length > 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
}

module.exports = checkDomainValidity;