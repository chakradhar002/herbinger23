// program for checking the speed limit of driver
const readline = require('readline')
// Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("Enter speed => ", input_speed => {
    if (input_speed <= 70) {
        console.log("Good Safe Driving ! ");
    }
    else {
        let overspeed_points = (input_speed - 70) / 5;
        if (overspeed_points <= 10) {
            console.log(`Overspeed Points => ${overspeed_points}`);
        }
        else {
            console.log("License Suspended");
        }
    }
});

inquirer.on("close", function () {
    console.log("Swapping done");
    process.exit(0);
});