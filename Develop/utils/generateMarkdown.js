// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}



// generateReadme function populating the README.md
function generateMarkdown({
	title,
	license,
	description,
	installation,
	usage,
	contributing,
	questions,
	tests,
}) {
	`
<h1 align="center">${title} </h1>
  
![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />
## Description
${description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
## Installation
 ${installation}
## Usage
 ${usage}
## License
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 
## Contributing
 ${contributing}
## Tests
 ${tests}
## Questions
 ${questions}<br />
 `;
};


module.exports = generateMarkdown;
