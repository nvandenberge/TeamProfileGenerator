const fs = require("fs");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");

let teamArr;

const buildTeam = (employeesArr) => {
  teamArr = employeesArr?.map((element) => {
    if (element instanceof Manager) {
      return generateManager(element);
    } else if (element instanceof Engineer) {
      return generateEngineer(element);
    } else if (element instanceof Intern) {
      return generateIntern(element);
    }
  });
  const html = buildHTML(teamArr);
  fs.writeFile("dist/index.html", html, (err) =>
    console.log("Your Team Profile has been generated!")
  );
};

// Generate Manager, Engineer, and Intern cards
const generateManager = ({ name, id, email, officeNum }) => {};

const generateEngineer = ({ name, id, email, github }) => {};

const generateIntern = ({ name, id, email, school }) => {};

const buildHTML = (teamArr) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Prolfile Generator</title>
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
      <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="jumbotron text-center">
        <h1>My Team</h1>
      </div>
    </header>
    <main class="container">
     <div class="row">
      ${teamArr?.join("")}
     </div>
    </main>
  </body>
</html>`;

module.exports = buildTeam;
