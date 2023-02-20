function addTask(params:string):number {
    let arrName = ["ankita","bhujbal"];
    console.log("the task parameter is inserted into the array")
    arrName.push(params);

    
    return arrName.length;
}


console.log("The length of array: ",addTask("a"));
// console.log(arrName.length);
