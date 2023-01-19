// // TODO: Create a function that returns a license badge based on which license is passed in

license = "";
function renderLicense(license) {
	switch (license) {
		case "GNU AGPLv3":
			return (license =
				"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
		case "GNU GPLv3":
			return (license =
				"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");

		case "GNU LGPLv3":
			return (license =
				"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");

		case "Mozilla Public License 2.0":
			return (license =
				"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");

		case "Apache License 2.0":
			return (license =
				"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");

		case "MIT License":
			return (license =
				"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");

		case "Boost Software License 1.0":
			return (license =
				"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");

		case "The Unlicense":
			return (license =
				"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
	}
} 



//Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// 	if (!license) {
// 		return ` `;
// 	} else {
// 		return `## License
//     this project is licensed under ${renderLicense()}`;
// 	}
// }


// function to generate markdown for README
function generateMarkdown(answers) {
    return `
# ${answers.title}

https://github.com/${answers.username}


# Description
${answers.description}


# Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)



# Installation
The following necessary dependencies must be installed to run the application properly: ${answers.installation}


# Usage
In order to use this app, ${answers.usage} 


# License
This project is licensed under the ${answers.license} license. 
![GitHub license](${renderLicense(answers.license)})


# Contributing
${answers.contributing}


# Tests
The following is needed to run the test: ${answers.tests}


# Questions
If you have any questions about the repo, open an issue or contact ${answers.username} directly at : ${answers.email}

`;
}
module.exports = generateMarkdown;