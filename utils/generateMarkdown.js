function renderLicenseBadge(license) {
  if (this.license === "true") {
    return `[![license:MIT](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`;
  } else {
    return "";
  }
}
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU") {
    return "[https://img.shields.io/badge/License-GPL%20v2-blue.svg](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
  } else if (license === "Apache") {
    return "[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}
function renderLicenseSection(license) {
  if (license !== "None of the above") {
    return `Look for the project under ${license}`;
  } else {
    return "Please choose a licence as you don't have one.";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  [![license](https://img.shields.io/badge/license-${
    data.license
  }-blue.svg)](https://shields.io/)

  
## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)
* ${renderLicenseLink(data.license)}

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

${renderLicenseSection(data.license)}

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
[${data.deployment}](https://snugglesmcgee.github.io/${data.deployment})

## Additional Information
* Date: ${data.date}
* Author: ${data.author}
* Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
