//all global requires
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
		
		fs.writeFileSync("readme.md", generateMarkdown({ ...answers }, (err) =>
			err
				? console.log(err)
				: console.log("Successfully created a read me file!")
		));
	});

// this makes the file for the read me!^
