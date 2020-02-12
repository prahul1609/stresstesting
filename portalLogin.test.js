const portalService = require('./services/portalService');
const portalUsers = require('./portalUsers.json');

const noOfSessions = 300;

let failedCasesCount = 0;
let successCount = 0;

async function portalTest(index) {
  try {
    const data = await portalService.loginPortal(getUserCreds());
    const {sessionId: srp2PortalSessionId, userId, userType} = data;
    const nonSystemUserId = userType !== 'System' ? userId : null;
    console.log(index)
    const supportedLang = portalService.getSupportedLanguage(srp2PortalSessionId);
    const countries = portalService.getCountries(srp2PortalSessionId);
    const roles = portalService.getRoles(srp2PortalSessionId, 'en');
    const user = portalService.getUserData(srp2PortalSessionId, userId);
    const projectStats = nonSystemUserId ? portalService.getProjectStatsForNonSystemUser(srp2PortalSessionId, nonSystemUserId) : portalService.getProjects(srp2PortalSessionId);
    const promises =  Promise.all([supportedLang, countries, roles, user, projectStats]);
    const firstSetAPIData = await promises;
    const projects = await portalService.getProjects(srp2PortalSessionId, nonSystemUserId);
    successCount++;
    return projects;
  } catch(err) {
    failedCasesCount++;
  }
}

function getUserCreds() {
  const index = Math.floor((Math.random() * 10) % portalUsers.length);
  return portalUsers[index];
}


async function startStressTest() {
  const promises = [];
  for (let index = 0; index < noOfSessions; index++) {
    promises.push(portalTest(index));
  }
  try {
    await Promise.all(promises);
  } catch (err) {
    console.log("INside errr", err)
  }
  console.log('DONEEEEEEEEE')
  console.log('Total Success API sets: ', successCount);
  console.log('Total failed API sets: ', failedCasesCount);
}

startStressTest();

