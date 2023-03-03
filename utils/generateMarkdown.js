const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)
  ## Table of Contents
  1. [Description](#description)   
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Licence](#licence)
  5. [Contributing](#contributing)
  6. [Tests](#Tests)
  7. [Questions](#github)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  Please follow the instructions below if you would like to ontribute to the project:
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Have questions about this project?  
  Github: https://github.com/${data.github} \n
  Email: ${data.email}
  
  ## Credits
  ${data.name}
   `;
}

module.exports = generateMarkdown;
