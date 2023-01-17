//all global requires 
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateMarkdown");


  // TODO: Create an array of questions for user input
 		inquirer.prompt([
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
			choices: ['MIT', 'MPL', 'GPL', 'BSD', 'NONE']
		},
		{
			type: "input",
			name: "contact",
			message: "how can they contact you?",
		},
		// 	{
		// 	type: "input",
		// 	name: "GitHub",
		// 	message: "Enter your GitHub Username?",
		// },
	])
	.then((answers) => {
		const data = generateReadme(answers);
		console.log(answers.title)

		fs.writeFile("readme.md", data, (err) => 
		err
				? console.log(err)
				: console.log("Successfully created a read me file!")
		);
	});































	
// // TODO: Create a function to write README file
// function writeToFile('README.MD', data) {
// 	fs.writeFile('README.MD',data, (err) =>{
// 		if (err){
// 			return console.log(err);
// 		}
// 		console.log('Congrats! you can now look at your Readme!')
// 	})

// }




// TODO: Create a function to initialize app
// function init() {
// 	inquirer.prompt(questions)
// 	.then (function(anwsers) {
// 		console.log(anwsers)
// 		writeToFile('README.md' , generateMarkdown(anwsers));
// 	});
// }



// Function call to initialize app
// init();




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