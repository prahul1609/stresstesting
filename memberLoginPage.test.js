
async function regionPUTest(url) {
  const appSettings = regionService.appSettings(url);
  const regSettings = regionService.regSettings(url);
  const emailSettings = regionService.emailSettings(url);
  const lang = regionService.textJsonData();
  const siteMessages = regionService.siteMessages(url);
  const promises = [appSettings,regSettings, emailSettings, lang, siteMessages]
  await Promise.all(promises);
  return {}
}

regionPUTest('https://tetlefxquj-usa.ipsos-srp-dev.com');