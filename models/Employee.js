const mysql = require("mysql2/promise");
const connect = require("../config/dbConfig");

class Employee {
  async printEmployees() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const results = await connect.query(
      ' SELECT e1.first_name, e1.last_name, role.title, department.name AS department, role.salary,  CONCAT(e2.first_name, " ", e2.last_name) AS manager FROM employee e1 LEFT JOIN employee e2 ON e2.id = e1.manager_id INNER JOIN role ON e1.role_id = role.id INNER JOIN department ON role.department_id = department.id'
    );
    console.log("\n");
    console.table(results[0]);
    console.log("\n");
  }
  async getEmployees() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const employees = await connect.query("select * from employee");
    // console.log(departments[0]);
    return employees[0];
  }
  async addEmployee(first_name, last_name, role_id, manager_id = null) {
    await connect.query(
      "insert into employee (first_name, last_name, role_id, manager_id) values ('" +
        first_name +
        "','" +
        last_name +
        "'," +
        role_id +
        "," +
        manager_id +
        ")"
    );
  }

  async updateEmployee(id, role_id) {
    await connect.query(
      "update employee set role_id = " + role_id + " where id = " + id
    );
  }
}
module.exports = Employee;
