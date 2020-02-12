const csv = require('csv-parser');
const fs = require('fs');
const request = require('request');

const regionService = require('./services/regionService');

const DEFAULT_PASSWORD = 'Ipsos@2019';
const REGISTRATION_CSV_FILE = './input_csv/registration.csv';

async function register(url, token) {
  try {
    const validateRes = await regionService.validateToken(url, token);
    const parsedValidateRes = validateRes && JSON.parse(validateRes);
    const { userId, userName, firstName, lastName, sessionId} = parsedValidateRes;
    const reqBodyForReg = {
      userName,
      firstName,
      lastName,
      avatarId: '4e1bb9bc-417d-4fbd-b4ad-36b9522dd0a5', //HC for 4b.jpg
      password: DEFAULT_PASSWORD,
      confirmPassoword: DEFAULT_PASSWORD,
    }
    if (!userId) return;
    const regData = await regionService.registration(url, userId, reqBodyForReg, sessionId);
    return regData;
  } catch(err) {
    console.log(err);
  }
}

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
      await Promise.all(promises);
      console.log('Registration completed successfully for all users')
      return null;
    } catch(err) {
      console.log(err)
      console.log('Unable to register. Failed!!!')
    }
  });
}

startForRegister();
