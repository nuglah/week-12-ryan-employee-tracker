require("dotenv").config();
const questions = require("./utils/questions");
const chalk = require("chalk");
const inquirer = require("inquirer");
// const dbConfig = require("./config/dbConfig");
// const mysql = require("mysql2/promise");
const Department = require("./models/Department");
const cTable = require("console.table");

// const dbConnection = await dbConfig();
let department = new Department();

async function main() {
  /*
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connecting to database..."));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connected to database!"));
  console.info(chalk.blue("=".repeat(30)));
  */
  inquirer.prompt(questions).then((response) => {
    // console.log("response", response);
    switch (response.title) {
      case "view all departments":
        department.getDepartments();
        main();
        break;
      default:
        main();
        break;
    }
  });
}
main();

// inquirer.prompt(questions).then((response)
