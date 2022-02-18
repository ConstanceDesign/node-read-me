// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
}
// Function to generate markdown for README
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Contribution:
${data.contribution}
## Testing:
${data.test}
## Github:
- Github: [${data.github}](https://github.com/${data.github})
## Contact information:
- Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
