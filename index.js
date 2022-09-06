require("dotenv").config();
const { questions, departmentQuestions } = require("./utils/questions");
const chalk = require("chalk");
const inquirer = require("inquirer");
// const dbConfig = require("./config/dbConfig");
// const mysql = require("mysql2/promise");
const Department = require("./models/Department");
const Role = require("./models/Role");
const Employee = require("./models/Employee");
const cTable = require("console.table");

// const dbConnection = await dbConfig();
let department = new Department();
let role = new Role();
let employee = new Employee();

async function main() {
  /*
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connecting to database..."));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connected to database!"));
  console.info(chalk.blue("=".repeat(30)));
  */
  inquirer.prompt(questions).then(async (response) => {
    // console.log("response", response);
    switch (response.title) {
      case "view all departments":
        await department.getDepartments();
        main();
        break;
      case "view all roles":
        await role.getRoles();
        main();
        break;
      case "view all employees":
        await employee.getEmployees();
        main();
        break;
      case "add a department":
        inquirer.prompt(departmentQuestions).then(async (response) => {
          console.log(response);
          department.addDepartment(response.name);
          main();
        });
        break;
      default:
        main();
        break;
    }
  });
}
main();

// inquirer.prompt(questions).then((response)
