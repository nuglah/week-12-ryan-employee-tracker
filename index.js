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

async function addRole() {
  const departments = await department.getDepartments();
  const departmentList = departments.map((a) => a.name);
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the name of the role?",
      },
      {
        type: "number",
        name: "salary",
        message: "what is the salary of the role?",
      },
      {
        type: "list",
        name: "department",
        message: "which department does this role belong to?",
        choices: departmentList,
      },
    ])
    .then(async (response) => {
      console.log(response);
      let departmentId = null;
      for (let i = 0; i < departments.length; i++) {
        if (departments[i].name === response.department) {
          departmentId = departments[i].id;
          break;
        }
      }
      console.log(departmentId);
      await role.addRole(response.name, response.salary, departmentId);

      main();
    });
}

async function updateEmployee() {
  const roles = await role.getRoles();
  const roleList = roles.map((a) => a.title);
  const employees = await employee.getEmployees();
  const employeeList = employees.map((a) => `${a.first_name} ${a.last_name}`);

  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "which employee's role do you want to update?",
        choices: employeeList,
      },
      {
        type: "list",
        name: "role",
        message: "which role do you want to assign to the selected employee?",
        choices: roleList,
      },
    ])
    .then(async (response) => {
      let roleId = null;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].title === response.role) {
          roleId = roles[i].id;
          break;
        }
      }

      let employeeId = null;
      for (let i = 0; i < employees.length; i++) {
        if (
          `${employees[i].first_name} ${employees[i].last_name}` ===
          response.employee
        ) {
          employeeId = employees[i].id;
          break;
        }
      }

      await employee.updateEmployee(employeeId, roleId);

      main();
    });
}

async function addEmployee() {
  const roles = await role.getRoles();
  const roleList = roles.map((a) => a.title);
  const employees = await employee.getEmployees();
  const employeeList = employees.map((a) => `${a.first_name} ${a.last_name}`);
  employeeList.unshift("None");
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the employee's last name?",
      },
      {
        type: "list",
        name: "role",
        message: "what is the employee's role?",
        choices: roleList,
      },
      {
        type: "list",
        name: "employee",
        message: "who is the employee's manager?",
        choices: employeeList,
      },
    ])
    .then(async (response) => {
      let roleId = null;
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].title === response.role) {
          roleId = roles[i].id;
          break;
        }
      }

      let employeeId = null;
      for (let i = 0; i < employees.length; i++) {
        if (
          `${employees[i].first_name} ${employees[i].last_name}` ===
          response.employee
        ) {
          employeeId = employees[i].id;
          break;
        }
      }

      await employee.addEmployee(
        response.first_name,
        response.last_name,
        roleId,
        employeeId
      );

      main();
    });
}

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
        await department.printDepartments();
        main();
        break;
      case "view all roles":
        await role.printRoles();
        main();
        break;
      case "view all employees":
        await employee.printEmployees();
        main();
        break;
      case "add a department":
        inquirer.prompt(departmentQuestions).then(async (response) => {
          console.log(response);
          department.addDepartment(response.name);
          main();
        });
        break;
      case "add a role":
        addRole();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "update employee role":
        updateEmployee();
        break;
      default:
        main();
        break;
    }
  });
}
main();

// inquirer.prompt(questions).then((response)
