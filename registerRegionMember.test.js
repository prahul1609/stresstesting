const csv = require('csv-parser');
const fs = require('fs');

const regionService = require('./services/regionService');

const DEFAULT_PASSWORD = 'Ipsos@2019';
const REGISTRATION_CSV_FILE = './input_csv/registration.csv';

const startForRegister = () => {
  const promises = [];
  fs.createReadStream(REGISTRATION_CSV_FILE)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row['Registration URL']);
    const regUrl = row['Registration URL'];
    const url = regUrl.split('#')[0];
    const token = regUrl.split('?')[1].split('=')[1];
    promises.push(register(url, token));
  })
  .on('end', async _ => {
    console.log('CSV file successfully processed');
    try {
      const responses = await Promise.all(promises);
      const allUsersCount = responses.length;
      const regFailedData = responses.filter(resp => resp === null);
      const regFailedUsersCount = regFailedData.length;
      console.log('Below is the details:');
      console.log('*****************************************************');
      if (!regFailedUsersCount) {
        const failedNewRegUsers = responses.filter(resp => resp !== '{"message":"Registration Success"}');
        if (failedNewRegUsers.length > 0) {
          console.log('Users registration success partially.');
          console.log('Success registered users count: ', allUsersCount-failedNewRegUsers.length)
          console.log('Failed registered users count: ', failedNewRegUsers.length)
        } else {
          console.log('All users registration completed successfully. Total success reg user count: ');
          console.log('Total success registered user count: ', allUsersCount);
        }
      } else if (regFailedUsersCount === allUsersCount) console.log('Registration already done for all users');
        else if (regFailedUsersCount > 0) {
        console.log('Users already registerted: ', regFailedUsersCount)
        console.log('New users registered successfully',allUsersCount-regFailedUsersCount)
      }
      console.log('*****************************************************');
      return null;
    } catch(err) {
      console.log(err)
      console.log('Unable to register. Failed!!!')
    }
  });
}

async function register(url, token) {
  try {
    const mediaReqBody = {
      fileName: "3b.jpg",
      mediaType: "Image",
      publicMedia: true,
      metaData: {},
    }
    const promises = [
      regionService.appSettings(url),
      regionService.regSettings(url),
      regionService.emailSettings(url),
      regionService.registrationHits(url),
      regionService.textJsonData(),
      regionService.siteMessages(url),
      regionService.validateToken(url, token),
      regionService.media(url, mediaReqBody),
    ];
    const allData = await Promise.all(promises);
    const { userId, userName, firstName, lastName, sessionId} = allData[6] && JSON.parse(allData[6]); //validateToken
    const {mediaRecord: {mediaId} } = allData[7] && JSON.parse(allData[7]); // media
    
    if (!userId) return null; // Error when already registered
    const reqBodyForReg = {
      userName,
      firstName,
      lastName,
      avatarId: mediaId, //HC for 4b.jpg
      password: DEFAULT_PASSWORD,
      confirmPassoword: DEFAULT_PASSWORD,
    }
    const regData = await regionService.registration(url, userId, reqBodyForReg, sessionId);
    return regData;
  } catch(err) {
    console.log(err);
  }
}

startForRegister();
