// program to print the even and odd numbers 
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inquirer.question("Enter limit of numbers => ", input_num => {
    for (let i = 1; i <= input_num; i++) {
        if (i % 2 == 0) {
            console.log(i + " EVEN");
        }
        else {
            console.log(i + " ODD");
        }
    }
});

inquirer.on("close", function() {
  console.log("Swapping done");
  process.exit(0);
});