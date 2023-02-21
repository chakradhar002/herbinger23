
const readline = require('readline')

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("Enter number limit => ", input_num => {
    let sum = 0;
    for (let i = 1; i <= input_num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log("sum of multiples of 3 & 5 upto 10 digits => " + sum);

});

inquirer.on("close", function () {
    console.log("Swapping done");
    process.exit(0);
});