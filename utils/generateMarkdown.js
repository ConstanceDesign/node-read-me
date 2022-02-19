function generateMarkdown(data) {
  return `# ${data.title}
## License:
[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io)]
  
## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Built With](#coding)

* [Contribution](#contribution)

* [Testing](#test)

* [Image](#image)

* [Video](#video)

* [GitHub Link](#github)

* [Deployment Link](#deployment)

* [Additional information](#date,#author,#email)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License:
${data.license}

## Built With
${data.coding}

## Contribution
${data.contribution}

## Testing
${data.test}

## Image
! [${data.image}](https://github.com/${data.image})

## Video
! [${data.video}](https://github.com/${data.video})

## GitHub Link
[${data.github}](https://github.com/${data.github})

## Deployment Link
[${data.deploy}](https://snugglesmcgee.github.io/${data.deploy})

## Additional Information
* Date: ${data.date}
* Author: ${data.author}
* Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
