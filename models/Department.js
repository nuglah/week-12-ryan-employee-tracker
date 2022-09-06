const mysql = require("mysql2/promise");
const connect = require("../config/dbConfig");

class Department {
  async getDepartments() {
    // this.dbConnection.query("SELECT d.id, d.name " + "FROM department d ");
    const results = await connect.query("select * from department");
    console.log("\n");
    console.table(results[0]);
    console.log("\n");
  }
  async addDepartment(name) {
    await connect.query(
      "insert into department (name) values ('" + name + "')"
    );
  }
}

module.exports = Department;
