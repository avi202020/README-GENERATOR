const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    //Title
    {
        type: "input",
        name: "title",
        message: "What is project title?",
      },
      //Description
      {
        type: "input",
        name: "description",
        message: "What is project description?",
      },  
      //Installation
      {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions?",
      },
      //Usage
      {
        type: "input",
        name: "usage",
        message:
          "Please provide instructions, examples  and screenshots as needed",
      },
    
      //Licence
      {
        type: "list",
        choices: ["MIT", "GPL", "GNU", "Apache", "None"],
        name: "license",
        message: "Please mention your project licence?",
      },
      //Contributing
      {
        type: "input",
        name: "contributing",
        message: "Please provide ways others can contribute to this project?",
      },
      //Tests
      {
        type: "input",
        name: "tests",
        message: "Please list your test steps?",
      },
      //Questions-Github
      {
        type: "input",
        name: "github",
        message: "what is your Github username?",
      },
      //Questions-email
      {
        type: "input",
        name: "email",
        message: "what is your email address?",
      },
    
      //Questions-email
      {
        type: "input",
        name: "name",
        message: "what is your name?",
      },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", readmeText, (error) => {
        if (error) {
          console.error(err);
        } else {
          console.log("Your README has been created!");
        }
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        readmeText = generateMarkdown(answers);
        
        fs.writeFileSync(path.join(process.cwd(), "README.md"), readmeText);
      });    

}

// function call to initialize program
init();
