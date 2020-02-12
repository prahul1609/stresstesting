const request = require('request');

const srp2PortalDomainURL = 'https://portal-api-int.ipsos-srp-dev.com';

module.exports = {
  loginPortal: creds => {
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
  },

  getSupportedLanguage: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/supportedLanguages?displayLocale=en`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) {
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          reject(err);
        }
      });
    })
  },
  
  getCountries: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/countries?displayLocale=en`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          reject(err);
        }
      });
    })
  },
  
  getRoles: (sessionId, displayLocale='en') => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/userRoles?displayLocale=${displayLocale}`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          reject(err);
        }
      });
    })
  },
  
  getUserData: (sessionId, userId) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/users/${userId}`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          reject(err);
        }
      });
    })
  },
  
  getProjectStats: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/projectsStats`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          if (response.body === 'Forbidden') {
            console.error('Getting FORBIDDEN in getProjectStats API call for: ',sessionId)
            return resolve({});
          }
          reject(err);
        }
      });
    })
  },

  getProjectStatsForNonSystemUser: (sessionId, userId) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2PortalDomainURL}/users/${userId}/projectCounts`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        try {
          const respData = JSON.parse(response.body);
          return resolve(respData);
        } catch(err) {
          console.log(err);
          if (response.body === 'Forbidden') {
            console.error('Getting FORBIDDEN in getProjectStatsForNonSystemUser API call for: ',sessionId)
            return resolve({});
          }
          reject(err);
        }
      });
    })
  },
  
  getProjects: (sessionId, userId=null) => {
    const sort='name', sortOrder='Asc', page='1', pageSize='50';
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2PortalDomainURL}/projects/search?sort=${sort}&sortOrder=${sortOrder}&page=${page}&pageSize=${pageSize}`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PORTAL-SESSION': sessionId
        },
        'body': JSON.stringify({"name":null,"clientName":null,userId})
      };
      console.log('Request API call: ', options.url);
      request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
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

}
