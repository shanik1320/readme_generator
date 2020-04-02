function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ![badmath](https://img.shields.io/badge/licence-MIT-RED)
  
  ## ${answers.description}
  
  The information about the users description of their project will go here
  
  ## Table of contents
  
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## ${answers.install}
  ``
  npm i
  ``
  ## ${answers.license}
  
  The type of license the user want to use for their project
  
  ## ${answers.contribution}
  
  If the user wants others to contribute to their project
  
  ## ${answers.test}
  
  The command used for testing the project
  
  ## Questions
  
  The way the user can be reached

`;
}

module.exports = generateMarkdown;
