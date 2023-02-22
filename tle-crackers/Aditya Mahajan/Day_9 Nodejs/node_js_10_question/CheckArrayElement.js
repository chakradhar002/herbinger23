// program for checking occurances of elements in array

const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("Enter element for checking occurance => ", element => {
    const arr = [1, 1, 2, 3, 4, 3, 2, 1, 1, 5, 6, 6, 5];
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(`Occurance of ${element} is => ` + counts[element]);

});

inquirer.on("close", function () {
    console.log("Swapping done");
    process.exit(0);
});