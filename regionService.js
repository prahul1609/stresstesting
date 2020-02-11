var request = require('request');

// module.exports = { loginPortal };

let srp2RegionDomainURL = 'https://tetlefxquj-usa.ipsos-srp-dev.com';

module.exports = {

  appSettings: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/project/settings/app`,
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

  regSettings: () => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/project/settings/registration`,
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

  emailSettings: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/project/settings/email`,
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

  textJsonData: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `https://s3-us-west-2.amazonaws.com/srp-app-int.ipsos-srp-dev.com/assets/i18n/en.json?v=20.1.0a:int`,
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

  siteMessages: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${srp2RegionDomainURL}/project/settings/siteMessages`,
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
}
