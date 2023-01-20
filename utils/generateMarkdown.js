const { default: ListPrompt } = require("inquirer/lib/prompts/list");

license = "";
function renderLicense(license) {
	switch (license) {
		case "GNU AGPLv3":
		  return (license =
			"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)%22)");
		case "GNU GPLv3":
		  return (license =
			"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)%22)");
	
		case "GNU LGPLv3":
		  return (license =
			"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)%22)");
	
		case "Mozilla Public License 2.0":
		  return (license =
			"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)%22)");
	
		case "Apache License 2.0":
		  return (license =
			"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)%22)");
	
		case "MIT License":
		  return (license =
			"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)%22)");
	
		case "Boost Software License 1.0":
		  return (license =
			"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)%22)");
	
		case "The Unlicense":
		  return (license =
			"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)%22)");
		case "Other":
		  return (license =
			"[![License: TYPE LICENSE NAME HERE](PROVIDE BADGE IMAGE SRC LINK HERE)](PROVIDE BADGE LINK HERE)");
	  }
};


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


## License
[![License](https://img.shields.io/badge/License-${answers.license}-blue)](https://opensource.org/licenses/${license})



# Contributing
${answers.contributing}


# Tests
The following is needed to run the test: ${answers.tests}


# Questions
If you have any questions about the repo, open an issue or contact ${answers.username} directly at : ${answers.email}

`;
}
module.exports = generateMarkdown;