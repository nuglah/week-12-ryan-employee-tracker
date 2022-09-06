const mysql = require("mysql2/promise");
const connect = require("../config/dbConfig");

class Employee {
  async getEmployees() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const results = await connect.query(
      ' SELECT e1.first_name, e1.last_name, role.title, department.name AS department, role.salary,  CONCAT(e2.first_name, " ", e2.last_name) AS manager FROM employee e1 LEFT JOIN employee e2 ON e1.id = e2.manager_id INNER JOIN role ON e1.role_id = role.id INNER JOIN department ON role.department_id = department.id'
    );
    console.log("\n");
    console.table(results[0]);
    console.log("\n");
  }
}
module.exports = Employee;
