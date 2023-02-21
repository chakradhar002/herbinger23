// program to find the max number among two digits
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("nodejs program to find max number")
inquirer.question("Enter Number 1 => ", num_1 => {
  inquirer.question("Enter Number 2 =>", num_2 => {
      console.log(`numbers entered ${num_1} ${num_2}`);
      if(num_1 > num_2){
        console.log(`max number is  ${num_1}`);
      }else{
        console.log(`max number is  ${num_2}`);
      }
      
      inquirer.close();
  });
});

inquirer.on("close", function() {
  process.exit(0);
});