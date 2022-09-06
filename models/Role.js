const mysql = require("mysql2/promise");
const connect = require("../config/dbConfig");

class Role {
  async getRoles() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const results = await connect.query(
      " SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id"
    );
    console.log("\n");
    console.table(results[0]);
    console.log("\n");
  }
}
module.exports = Role;
