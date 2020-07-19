const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writMyFile = util.promisify(fs.writeFile);

