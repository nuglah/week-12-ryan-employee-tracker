require("dotenv").config();
const questions = require("./utils/questions");
const chalk = require("chalk");
const inquirer = require("inquirer");
const dbConfig = require("./config/dbConfig");

async function getDepartments(dbConnection) {
  await dbConnection.query(
    "SELECT id, name FROM department",
    function (err, results) {
      console.log(results);
      return results;
    }
  );
}

async function main() {
  const mysql = require("mysql2/promise");
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connecting to database..."));
  console.info(chalk.blue("=".repeat(30)));
  const dbConnection = await dbConfig();
  console.info(chalk.blue("=".repeat(30)));
  console.info(chalk.blue("Connected to database!"));
  console.info(chalk.blue("=".repeat(30)));
  inquirer.prompt(questions).then(async (response) => {
    console.log("response", response);
    //const dbConnection = await dbConfig();

    if (response.title === "view all departments") {
      const departments = await getDepartments(dbConnection);
      console.log(departments);
      getDepartments();
    }
  });
}
main();

// inquirer.prompt(questions).then((response)
