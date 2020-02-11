const request = require('request');

const srp2PortalDomainURL = 'https://portal-api-int.ipsos-srp-dev.com';
function loginPortal(creds) {
  console.log(creds, "creds")
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': `${srp2PortalDomainURL}/auth/session`,
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(creds),
    };
    console.log('Request API call: ', options.url);
    request(options, function (error, response) {
      if (error) return reject(error);
      console.log(response.body);
      try {
        const respData = JSON.parse(response.body);
        return resolve(respData);
      } catch(err) {
        console.log(err);
        reject(err);
      }
    });
  })
}

loginPortal({"email":"britt.poplin@ipsos.com","password":"Ipsos@2019"});

