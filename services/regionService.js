var request = require('request');

// module.exports = { loginPortal };

let srp2RegionDomainURL = 'https://tetlefxquj-usa.ipsos-srp-dev.com';

module.exports = {

  appSettings: srp2RegionURL => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionURL}/project/settings/app`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  regSettings: srp2RegionURL => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionURL}/project/settings/registration`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  emailSettings: srp2RegionURL => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionURL}/project/settings/email`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  authenticationSession: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/authentication/session`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  textJsonData: () => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `https://s3-us-west-2.amazonaws.com/srp-app-int.ipsos-srp-dev.com/assets/i18n/en.json?v=20.1.0a:int`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  siteMessages: srp2RegionURL => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionURL}/project/settings/siteMessages`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  authPortal: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionDomainURL}/authentication/portal`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify({"initialAuthorization":true}),
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  membersDetails: (sessionId, userIds) => {
    userIds=["b01e2959-831d-46e8-bfb6-9f7cbd5dd53f"]; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionDomainURL}/project/members/details`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify({userIds}),
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  projectInfo: (sessionId, userIds) => {
    userIds=["b01e2959-831d-46e8-bfb6-9f7cbd5dd53f"]; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/projects/info`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  getActivities: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionDomainURL}/activities/search?page=1&pageSize=10&sort=status&sortOrder=Asc`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify({"name":"","isMetrics":true}),
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  getActivityDetails: (sessionId, activityId) => {
    activityId = '08444091-2f06-4e1f-be60-5833538ad8a9'; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/activities/${activityId}`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  discussionAccess: (sessionId, activityId) => {
    activityId = '08444091-2f06-4e1f-be60-5833538ad8a9'; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionDomainURL}/activities/${activityId}/discussionAccess`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify({}),
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  timeline: (sessionId, activityId) => {
    activityId = '08444091-2f06-4e1f-be60-5833538ad8a9'; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/activities/${activityId}/timeline`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  memberAttrData: (sessionId, userIds) => {
    userIds = ["b01e2959-831d-46e8-bfb6-9f7cbd5dd53f","f88b49ba-be1b-4e9a-b8f7-eeb1bdccfe79","d3267b9c-f73b-45c3-b294-f709eb80fe29","1c35c2d2-2aea-43b3-80bb-e09284834429","918fbb58-646d-4616-94fe-2e8fe17e2c83"]; // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionDomainURL}/project/members/memberAttData`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify({userIds}),
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  validateToken: (srp2RegionURL, token) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionURL}/validation?token=${token}`,
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify({"inviteCode":token}),
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  registrationHits: (srp2RegionURL, token) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionURL}/users/registrationHits`,
        'headers': {
          'Content-Type': 'application/json',
        },
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  media: (srp2RegionURL, reqBody) => {
    // HC for now body incase no data sent from API caller
    reqBody = (!reqBody || Object.keys(reqBody).length === 0) ? 
      {"fileName":"3d.jpg","mediaType":"Image","publicMedia":true,"metaData":{}} :
      reqBody;
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionURL}/users/avatar/media`,
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(reqBody),
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  defaultIcons: (iconName= '3d.jpg') => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `https://s3-us-west-2.amazonaws.com/srp-app-int.ipsos-srp-dev.com/assets/defaultIcons/${iconName}`,
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(reqBody),
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  /**
   * API call post clicking Register - This is first call to response for Registration Success
   */
  registration: (srp2RegionURL, userId, reqBody, sessionId) => {
    return new Promise((resolve, reject) => {
      var options = {
        'timeout': 4000,
        'method': 'POST',
        'url': `${srp2RegionURL}/registration/${userId}`,
        'headers': {
          'Content-Type': 'application/json',
          'X-SRP2-PROJECT-SESSION': sessionId,
        },
        'body': JSON.stringify(reqBody),
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  /**
   * This calls happen post registration call is done.
   * username and password is taken from user and stored to be used here
   */
  authenticationProject: (srp2RegionUrl, reqBody) => {
    reqBody = {"username":"user110","password":"Ipsos@2019"}
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${srp2RegionUrl}/registration/${userId}`,
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(reqBody),
      };
      console.log('Request API call: ', options.url);
      return request(options, function (error, response) { 
        if (error) return reject(error);
        // console.log(response.body);
        return resolve(response.body);
      });
    })
  }
}
