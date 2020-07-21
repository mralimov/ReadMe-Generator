// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
   type: 'input',
   message: 'What is the name of ypur Project?',
   name: 'title'       
},
{
   type: 'input',
   message: 'Pleaes enter a description of your',
   name: 'description'
},
{
   type: 'input',
   message: 'What are the installation instructions for this project. Write None if no instructions',
   name: 'installation'
},
{
   type: 'input',
   message: 'How would you like your application to be used',
   name: 'usage'
},
{
   type: 'input',
   message: 'Who contributed on this project?',
   name: 'construction'
},
{
   type: 'input',
   message: 'What are the Test Instructions?',
   name: 'test'
},
{
   type: 'checkbox',
   message: 'Please select a license',
   choices: [
       "Apache",
       "MIT",
       "ISC",
       "GNU GPLv3"
   ],
   name: "license"
 },
 {
   type: 'input',
   message: 'Whose Credit is this work?',
   name: 'credit'
},
{
   type: 'input',
   message: 'What is your GitHub username',
   name: 'username'
},
{
   type: 'input',
   message: 'What is your email address',
   name: 'email'
},

]);
}
    function generateMarkdown(response) {
        return `
  # ${response.title}
 # Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [Test](#test)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)
 ## Description:
 ![License](https://img.sheilds.io/badge/License-${response.license}-blue.svg "Lincense Badge")
     ${response.description}
 ## Installation
     ${response.installation}
 ## Usage:
     ${response.usage}
 ## Contributing:
     ${response.contrabuting}
 ## Test:
     ${response.test}
 ## Credits:
     ${response.credit}
 ## License:
     For more information about License, click on the link PRIORITY_BELOW_NORMAL.Description
  - [License](https://opensource.org/license/${response.license})
     ## Questions:
         For questions about the Generator you can go to my GitHub page at the following Link:
        - [GitHub Profile](https://github.com/${response.username})
         For additional questions please reach out to my emaul at: ${response.email}
         `;
    }

    async function init(){
        try {
            const response = await promptUser();
            const readMe = generateMarkdown(response);

            await fs.writeFileSync('README.md', readMe)
            console.log("Success!");
        } catch (err){
            console.log(err);
        }
    }

    init();