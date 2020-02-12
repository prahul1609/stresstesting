# Stress Testing Scripts

#Prerequisites:
System should have nodejs & npm installed
If not installed please check below url for installation documentation:
https://nodejs.org/en/download/package-manager/

To check if you have Node.js installed, run this command in your terminal:
node -v

To confirm that you have npm installed you can run this command in your terminal:
npm -v

#Steps to start:
Run `npm install`
Go ahead with particular tests with provided commands


#Portal Stress Testing Landing page (login)
Run below command
`node portalLanding.test.js`


#For Region Members Registration -
Step1: Generate the csv file from region PU navigate 
        People => Members => Export Url

Step2: Rename the csv file to registration.csv

Step3: Copy the csv file to input_csv directory 
      NOTE: One sample csv file is already present in directory for reference "sample_registration.csv"

Step4: Run below command - 
      `node registerRegionMember.test.js`


# For Region Member Login Page Test -
run below command
  `node memberLoginPage.test.js`
