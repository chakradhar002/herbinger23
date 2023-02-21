/**
 * Swapping od two numbers
 * @param {*} request 
 * @param {*} response 
 */
let swapping = async (request, response) => { //service name:
    try {

        let n1 = request.body.number1;
        let n2 = request.body.number2;
        if (n1 ===null || n2===null) 
        {
            await response.status(400).send("Field is missing");
        }
        else 
        {
         [n1,n2] = [n2,n1];
         let show ={"number 1 :":n1," number 2 :":n2}
            await response.status(200).json(show);
         }
    } catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * Max of two numbers
 * @param {*} request 
 * @param {*} response 
 */
let Maxof2 = async (request, response) => { //service name:
    try {

        let n1 = request.body.number1;
        let n2 = request.body.number2;
        if (n1 ===null || n2===null) 
        {
            await response.status(400).send("Field is missing");
        }
        else 
        {
         if (n1>n2)
         {
            await response.status(200).json("Number 1 is greater ");
         }
         else
         {
            await response.status(200).json("Number 2 is greater ");
         }
    }}
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * print buzz or fizz according to number
 * @param {*} request 
 * @param {*} response 
 */
let fizzbuzz = async (request, response) => { //service name:
    try {

        let number = request.body.number1;
        if(isNaN(number))
        {
            await response.status(400).send("NOT A NUMBER");
        }
        else if(number%3==0 && number%5==0)
        {
            await response.status(200).json("FIZZBUZZ");
        }
        else if(number%3==0)
        {
            await response.status(200).json("FIZZ");
        }
        else if(number%5==0)
        {
            await response.status(200).json("BUZZ");
        }
         else
         {
            await response.status(200).json("Number 2 is greater ");
         }
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * find even or odd in a loop
 * @param {*} request 
 * @param {*} response 
 */
let oddevenloop = async (request, response) => { //service name:
    try {

        for(i=1;i<=10;i++)
        {
            if(i%2==0)
            {
                response.status(200).json(i+" is Even Number");
            }
            if(i%2!=0)
            {
                await response.status(200).json(i+" is Odd Number");
            }
        }   
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * sumofmultipleof_3_5
 * @param {*} request 
 * @param {*} response 
 */
let sumofmultipleof_3_5 = async (request, response) => { //service name:
    try {
        let limit = request.body.limit;
        let sum = 0;
        for(let i=0;i<=limit;i++)
        {
            if(i%3==0 || i%5==0)
            {
                sum = sum+i;
            }
        }
        await response.status(200).json(sum);
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * prime till range 
 * @param {*} request 
 * @param {*} response 
 */
let primeTillRange = async (request, response) => { //service name:
    try {
        let min = request.body.min;
        let max = request.body.min;
        for(let i=min;i<=max;i++)
        {
            let flag=0;
            for (let j=2;j<i;j++)
            {
                if(i%j==0)
                {
                    flag=1;
                    break;
                }
            }
            if(i>1 && flag==0){
                await response.status(200).json(i);
            }
        }
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * speed limit
 * @param {*} request 
 * @param {*} response 
 */
let speedLimit = async (request, response) => { //service name:
    try {
        let speed = request.body.speed;
        if (speed<70)
        {
            await response.status(200).json("Good Safe Driving !");
        }
        if (speed>70)
        {
            let greater_than_70 = speed-70;
            let penelty = greater_than_70/5;
            if(penelty<=10)
            {
                await response.status(200).json("Speed limit crossed by Penelty Point :"+penelty);
            }
            else
            {
                await response.status(200).json("License Suspended");
            }
        }
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * giving grade accoding to marks
 * @param {*} request 
 * @param {*} response 
 */
let grade = async (request, response) => { //service name:
    try {
        const marks = [65,78,91,89,84,87];
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        }
        let avg = sum/marks.length;
        await response.status(200).json(avg);
        if(avg<70)
        {
            await response.status(200).json("Grade : D ");
        }
        if(avg>71 && avg<80)
        {
            await response.status(200).json("Grade : C ");
        }
        if(avg>81 && avg<90)
        {
            await response.status(200).json("Grade : B ");
        }
        if(avg>91 && avg<=100)
        {
            await response.status(200).json("Grade : A ");
        }
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
/**
 * check an element in array
 * @param {*} request 
 * @param {*} response 
 */
let checkInArray = async (request, response) => { //service name:
    try {
        let num = request.body.num;
        const nums = [ 1, 3, 5, 7];
        console.log(nums.includes(num));
    }
     catch (e) {
        response.status(400).send(e.message)
    }
}
module.exports = {
    swapping,
    Maxof2,
    fizzbuzz,
    oddevenloop,
    primeTillRange,
    grade,
    checkInArray,
    speedLimit,
    sumofmultipleof_3_5

}