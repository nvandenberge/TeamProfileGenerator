// Importing dependencies and components
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const buildTeam = require("./src/buildTeam");

// Validate the response is not empty
const inputValidation = (input) => !input ? "Please provide a response" : true;
// Validate the response contains letters only
const letterValidation = (input) => !/^[A-Za-z_ ]+$/gi.test(input) ? "Please enter a valid name (letters only)" : true;
// Validate the response is in email format
const emailValidation = (input) => !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input) ? "Please enter a valid email address" : true;
// Validate the response is numbers only
const numberValidation = (input) => !/^\+?(0|[1-9]\d*)$/g.test(input) ? "Please enter a valid positive number" : true;

let employees = [];
let employeesArr = [];

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
    validate: letterValidation,
    when: (response) => response.role != "Exit",
  },
  {
    type: "number",
    message: (response) => `${response.role}'s ID number:`,
    name: "id",
    validate: numberValidation,
    when: (response) => response.role != "Exit",
  },
  {
    type: "input",
    message: (response) => `${response.role}'s email address:`,
    name: "email",
    validate: emailValidation,
    when: (response) => response.role != "Exit",
  },
  // Only prompt when Manager is selected
  {
    type: "input",
    message: "Manager's office number?",
    name: "officeNum",
    validate: numberValidation,
    when: (response) => response.role === "Manager",
  },
  // Only prompt when Engineer is selected
  {
    type: "input",
    message: "Engineer's Github username?",
    name: "github",
    validate: inputValidation,
    when: (response) => response.role === "Engineer",
  },
// Only prompt when Intern is selected
  {
    type: "input",
    message: "Intern's school?",
    name: "school",
    validate: letterValidation,
    when: (response) => response.role === "Intern",
  },
];
  
// Initialize app
  const init = () => {
    inquirer
    .prompt(employeeQuestions)
    .then((response) => addMember(response))
    .catch((error) => console.log("Error ==", error));
  };

// Destructure response and push to employeesArr
  const addMember = ({ name, id, email, officeNum, github, school, role}) => {
    switch (role) {
      case "Manager":
        employees = new Manager(name, id, email, officeNum);
        console.log("Manager has been added!");
        break;
      case "Engineer":
        employees = new Engineer(name, id, email, github);
        console.log("Engineer has been added!");
        break;
      case "Intern":
        employees = new Intern(name, id, email, school);
        console.log("Intern has been added!");
        break;
      case "Exit":
        buildTeam(employeesArr);
        console.log("Thank you for using the Team Profile Generator!");
        return;
    }
    employeesArr.push(employees);
    promptNewMember();
  };

// Prompt user to add another role
  const promptNewMember = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Add another team member?",
          name: "add",
          choices: ["Yes", "No"],
        },
      ])
      .then((response) => {
        if (response.add === "Yes") {
          inquirer
            .prompt(employeeQuestions)
            .then((response) => addMember(response))
            .catch((error) => {
              console.log("Error ==", error);
            });
        } else {
          buildTeam(employeesArr);
        }
      });
  };

  init();
