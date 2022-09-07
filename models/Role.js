const mysql = require("mysql2/promise");
const connect = require("../config/dbConfig");

class Role {
  async printRoles() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const results = await connect.query(
      " SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id"
    );
    console.log("\n");
    console.table(results[0]);
    console.log("\n");
  }
  async getRoles() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const roles = await connect.query("select * from role");
    // console.log(departments[0]);
    return roles[0];
  }
  async addRole(name, salary, departmentId) {
    await connect.query(
      "insert into role (title, salary, department_id) values ('" +
        name +
        "'," +
        salary +
        "," +
        departmentId +
        ")"
    );
  }
}
module.exports = Role;
