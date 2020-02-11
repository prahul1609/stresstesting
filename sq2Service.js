var request = require('request');

// module.exports = { loginPortal };

let sq2ServiceDomainURL = 'https://int-api.ipsos-smx.com/sq-srp-srv';

module.exports = {

  initiateSession: sessionId => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': `${sq2ServiceDomainURL}/srp/initiateSession`,
        'headers': {
          'Content-Type': 'application/json',
          'authorization': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  getBoardData: (sessionId, activityId, communityId) => {
    activityId = '08444091-2f06-4e1f-be60-5833538ad8a';
    communityId = '62189d88-4cd2-46c2-a56a-8c568bb8d882';
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${sq2ServiceDomainURL}/boards?activityId=${activityId}&communityId=${communityId}`,
        'headers': {
          'Content-Type': 'application/json',
          'authorization': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  notes: (sessionId, boardId) => {
    boardId = '5dc9543b161ff900118c6645';
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${sq2ServiceDomainURL}/boards/${boardId}/notes`,
        'headers': {
          'Content-Type': 'application/json',
          'authorization': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  topicViews: sessionId => {
    questionIds = null;
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${sq2ServiceDomainURL}/board/topic-views`,
        'headers': {
          'Content-Type': 'application/json',
          'authorization': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  },

  boardMetrics: sessionId => {
    since = Date.now(); // test data
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url': `${sq2ServiceDomainURL}/metrics?boardMetrics=false&since=${since}`,
        'headers': {
          'Content-Type': 'application/json',
          'authorization': sessionId,
        },
      };
      return request(options, function (error, response) { 
        if (error) return reject(error);
        console.log(response.body);
        return resolve(response.body);
      });
    })
  }
}
