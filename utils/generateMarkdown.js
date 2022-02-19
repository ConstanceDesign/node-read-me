// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
  return "";
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
## Table of Contents

* [Project Status](#status)

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* ${renderLicenseLink(data.license)}

* [Built With](#coding)

* [Contribution](#contribution)

* [Testing](#test)

* [Visuals](#visuals)

* [GitHub Link](#github)

* [Deployment Link](#deployment)

* [Additional information](#date,#author,#email,#thanks)

## Project Status
${data.status}

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

## Visuals
${data.visuals}

## GitHub Link
[${data.github}](https://github.com/${data.github})

## Deployment Link
[${data.deploy}](https://snugglesmcgee.github.io/${data.deploy})

## Additional Information
* Date: ${data.date}
* Author: ${data.author}
* Email: [${data.email}](mailto:user@example.com)
* Acknowledgements: ${data.thanks} `;
}

module.exports = generateMarkdown;
