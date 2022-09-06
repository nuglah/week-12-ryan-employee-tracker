// Array of objects for the questions in the inquierer.
const questions = [
  {
    type: "list",
    name: "title",
    message: "what would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update employee role",
    ],
  },
];
const departmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "what is the name of the department?",
  },
];

module.exports = { departmentQuestions, questions };
