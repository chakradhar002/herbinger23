// program to print primenumbers in a given range
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("Enter starting point => ", starting_point => {
    inquirer.question("Enter endpoint  =>", ending_point => {
        for (let i = starting_point; i < ending_point; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                console.log(i);
            }
        }
    });
});

inquirer.on("close", function () {
    console.log("Swapping done");
    process.exit(0);
});