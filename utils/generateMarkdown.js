function generateMarkdown(answers) {
  return `
  
  # 
  ${answers.title}

  ![badmath](https://img.shields.io/badge/licence-MIT-RED)
  
  ## 
  ${answers.description}
  
  
  
  ## Table of contents
  
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## 
  ${answers.install}
  ``
 
  ``
  ## 
  ${answers.license}
  
 
  
  ## 
  ${answers.contribution}
  
  
  
  ## 
  ${answers.test}
  
  
  
  ## Questions
  
  

`;
}

module.exports = generateMarkdown;
