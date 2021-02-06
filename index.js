// Importing dependencies and components
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeQuestions = [
    {
      type: "list",
      message: "Select a role to add: ",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "Exit"],
    },
    {
      type: "name",
      message: (response) => `${response.role}'s name:`,
      name: "name",
      when: (response) => response.role != "Exit",
    },
    {
      type: "number",
      message: (response) => `${response.role}'s ID number:`,
      name: "id",
      when: (response) => response.role != "Exit",
    },
    {
      type: "input",
      message: (response) => `${response.role}'s email address:`,
      name: "email",
      when: (response) => response.role != "Exit",
    },
    {
      type: "input",
      message: "Manager's office number?",
      name: "officeNum",
      when: (response) => response.role === "Manager",
    },
    {
      type: "input",
      message: "Engineer's Github username?",
      name: "github",
      when: (response) => response.role === "Engineer",
    },
    {
      type: "input",
      message: "Intern's school?",
      name: "school",
      when: (response) => response.role === "Intern",
    },
  ];
  
  const init = () => {
    inquirer
      .prompt(employeeQuestions)
  };

  init();
