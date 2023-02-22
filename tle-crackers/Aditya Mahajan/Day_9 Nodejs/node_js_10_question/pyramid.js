// program to print the pyramid by accepting floors from user

const readline = require('readline')

// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("Enter number of floors => ", pyramid_floors => {
    let string = "";
    for (let i = 0; i < pyramid_floors; i++) {
        for (let j = 0; j <= i; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(`${string}`);

});

inquirer.on("close", function () {
    console.log("Swapping done");
    process.exit(0);
});