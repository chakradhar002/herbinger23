// fizzbuzz program 
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line
const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("nodejs program for fizzbuzz")
inquirer.question("Enter a number => ", num => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FIZZBUZZ");
    }
    else if (num % 3 !== 0 && num % 5 !== 0) {
        console.log("given input number/ value");
    }
    else if (num % 3 === 0) {
        console.log("FIZZ");
    }
    else if (num % 5 === 0) {
        console.log("BUZZ");
    }
    else if (isNaN(num)) {
        console.log("not a number");
    }
});

inquirer.on("close", function () {
    process.exit(0);
});