// program to check the element is present in the array or not
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inquirer.question("Enter number for search => ", element => {
    let array_given = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(array_given);
    console.log(array_given.includes(element));
});

inquirer.on("close", function() {
  console.log("Swapping done");
  process.exit(0);
});