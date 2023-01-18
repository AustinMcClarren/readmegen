//all global requires
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const utils = require("utils");

// Array of questions for the read me
inquirer
	.prompt([
		{
			type: "input",
			name: "title",
			message: "What is the title of your project?",
		},
		{
			type: "input",
			name: "description",
			message: "What is your project about?",
		},
		{
			type: "input",
			name: "installation",
			message: "How did you install your project?",
		},
		{
			type: "input",
			name: "usage",
			message: "how do you use your project?",
		},
		{
			type: "checkbox",
			name: "license",
			message: "Choose a license!",
			choices: ["MIT", "MPL", "GPL", "BSD", "NONE"],
		},
		{
			type: "input",
			name: "contact",
			message: "how can they contact you?",
		},
		{
			type: "input",
			name: "username",
			message: "Enter your GitHub Username?",
		},
		{
			type: "input",
			message: "What commands are needed to test this app?",
			name: "tests",
		},
		{
			type: "input",
			message: "What is your email address?",
			name: "email",
		},
		{
			type: "input",
			message: "Who contributed to this project?",
			name: "contributing",
		},
	])
	.then((answers) => {
		console.log(generateMarkdown(answers));
		const content = generateMarkdown({ ...answers });

		fs.writeFile("readme.md", content, (err) =>
			err
				? console.log(err)
				: console.log("Successfully created a read me file!")
		);
	});




	
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
