// program for swapping of two numbers

const readline = require('readline')

// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inquirer.question("Enter Number 1 => ", num_1 => {
  inquirer.question("Enter Number 2 =>", num_2 => {
      console.log(`before swapping ${num_1} ${num_2}`);
      [num_1,num_2] = [num_2,num_1];
      console.log(`after swapping ${num_1} ${num_2}`);
      inquirer.close();
  });
});

inquirer.on("close", function() {
  console.log("Swapping done");
  process.exit(0);
});