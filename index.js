// Declaring all of the Global requires
// npm modules package
const inquirer = require("inquirer");
// file system
const fs = require("fs");
// generateMarkdown.js code
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
    type: "checkbox",
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
    validate: (your_license) => {
      if (your_license) {
        return true;
      } else {
        console.log("Select a license or choose none of the above.");
        return false;
      }
    },
  },
  // Languages and Technologies
  {
    type: "checkbox",
    name: "technologies",
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
    validate: (your_license) => {
      if (your_license) {
        return true;
      } else {
        console.log("Select a license or choose none of the above.");
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
  // Images
  {
    type: "input",
    name: "image",
    message: "Enter an image link:",
    validate: (your_test) => {
      if (your_test) {
        return true;
      } else {
        console.log("Enter an image link only if you have one");
        return false;
      }
    },
  },
  // Video
  {
    type: "input",
    name: "video",
    message: "Enter a video link:",
    validate: (your_test) => {
      if (your_test) {
        return true;
      } else {
        console.log("Enter a video link only if you have one");
        return false;
      }
    },
  },
  // Github Username
  {
    type: "input",
    name: "gitHub",
    message: "Enter your GitHub Username: (Required)",
    validate: (gitHub_input) => {
      if (gitHub_input) {
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
    validate: (gitHub_input) => {
      if (gitHub_input) {
        return true;
      } else {
        console.log("You MUST enter a project deployed link to continue.");
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
];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(
      "Success! Check out your completed README.md to see the output!"
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
