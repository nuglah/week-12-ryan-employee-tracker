// Array of objects for the questions in the inquierer.
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title for this project?",
  },
  {
    type: "input",
    name: "description",
    message: "write a short description of the app...",
  },
  {
    type: "input",
    name: "installation",
    message: "how will your app be installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "how is your app used?",
  },
  {
    type: "input",
    name: "contribution",
    message: "what are your guidelines for contribution?",
  },
  {
    type: "input",
    name: "test",
    message: "what are your instructions for testing your app?",
  },
  {
    type: "list",
    message: "What license wpuld you like your app to have?",
    name: "licenses",
    choices: ["BSD", "MIT", "Eclipse"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

module.exports = questions;
