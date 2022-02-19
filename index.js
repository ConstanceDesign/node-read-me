// Declaring all of the Global requires
// Captures user input
const inquirer = require("inquirer");
// Interacts with file paths
const path = require("path");
// File System
const fs = require("fs");
// link to generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log("Welcome to my README Generator");
console.log(
  "Answer the following questions to create a high quality README for your project"
);

// Array of questions for user input
const questions = [
  // Project Name
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("You MUST enter a project name to continue.");
        return false;
      }
    },
  },
  // Project Status
  {
    type: "list",
    name: "status",
    message: "Enter the status this project:",
    choices: ["Completed", "Slowed Down", "Stopped"],
    validate: (your_status) => {
      if (your_status) {
        return true;
      } else {
        console.log("You MUST enter a description to continue.");
        return false;
      }
    },
  },
  // Description
  {
    type: "input",
    name: "description",
    message: "Describe your project objective: (Required)",
    validate: (your_description) => {
      if (your_description) {
        return true;
      } else {
        console.log("You MUST enter a description to continue.");
        return false;
      }
    },
  },
  // Installation
  {
    type: "input",
    name: "installation",
    message: "Enter the instructions to install this project:",
    validate: (your_installation) => {
      if (your_installation) {
        return true;
      } else {
        console.log("Enter the steps of installation.");
        return false;
      }
    },
  },
  // Usage
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
    validate: (your_usage) => {
      if (your_usage) {
        return true;
      } else {
        console.log("Enter information on how to use this project.");
        return false;
      }
    },
  },
  // Licensing
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: [
      "MPL 2.0",
      "GNU",
      "Apache 2.0",
      "MIT",
      "AGPL-3.0",
      "GPL 3.0",
      "BSD 3",
      "None of the above",
    ],
    validate: (your_licence) => {
      if (your_licence) {
        return true;
      } else {
        console.log("Select a license for the project.");
        return false;
      }
    },
  },
  // Built With
  {
    type: "checkbox",
    name: "coding",
    message: "Select the lanuguages and technologies used in this project:",
    choices: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Git",
      "Web APIs",
      "Third-Party APIs",
      "Server-Side APIs",
      "Node.js",
      "Express",
      "OOP",
      "SQL",
      "ORM",
      "MVC",
    ],
    validate: (your_coding) => {
      if (your_coding) {
        return true;
      } else {
        console.log(
          "Select any of the listed languages and technolgies used for this project."
        );
        return false;
      }
    },
  },
  // Contributors
  {
    type: "input",
    name: "contribution",
    message: "Enter guidelines for users to contribute to this project:",
    validate: (your_contibution) => {
      if (your_contibution) {
        return true;
      } else {
        console.log(
          "Provide information on how to contribute to this project."
        );
        return false;
      }
    },
  },
  // Test Instructions
  // npm test
  {
    type: "input",
    name: "test",
    message: "How does the user test this project?",
    validate: (your_test) => {
      if (your_test) {
        return true;
      } else {
        console.log("Explain how to test this project.");
        return false;
      }
    },
  },
  // Visuals
  {
    type: "input",
    name: "visuals",
    message: "Enter an image link:",
    validate: (visual_input) => {
      if (visual_input) {
        return true;
      } else {
        console.log("Enter an image link only if you have one");
        return false;
      }
    },
  },
  // Github Username
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username: (Required)",
    validate: (github_input) => {
      if (github_input) {
        return true;
      } else {
        console.log("Please enter your GitHub Username to continue.");
        return false;
      }
    },
  },
  // Deployment
  {
    type: "input",
    name: "link",
    message: "Enter the deployment link for this project. (Required)",
    validate: (deploy_input) => {
      if (deploy_input) {
        return true;
      } else {
        console.log("You MUST enter a project deployed link to continue.");
        return false;
      }
    },
  },
  // Date
  {
    type: "input",
    name: "date",
    message: "Please enter the date this project was completed:",
    validate: (date_input) => {
      if (date_input) {
        return true;
      } else {
        console.log("Please enter a date for this project.");
        return false;
      }
    },
  },
  // Author
  {
    type: "input",
    name: "author",
    message: "Please enter your name as the author:",
    validate: (author_input) => {
      if (author_input) {
        return true;
      } else {
        console.log("Please enter your name.");
        return false;
      }
    },
  },
  // Email Address
  {
    type: "input",
    name: "email",
    message: "Please enter your email address for people to contact you:",
    validate: (email_input) => {
      if (email_input) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  // Acknowledgements
  {
    type: "input",
    name: "thanks",
    message:
      "Please enter acknowledgements to those who helped make this project happen!:",
    validate: (thanks_input) => {
      if (thanks_input) {
        return true;
      } else {
        console.log("Please enter thanks to those who helped.");
        return false;
      }
    },
  },
];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log(
      "Success! Check out your completed README.md to see the output."
    );
  });
}

// Function to initilize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initilize app
init();
