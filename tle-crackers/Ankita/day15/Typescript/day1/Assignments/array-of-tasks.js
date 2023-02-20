function addTask(params) {
    var arrName = ["ankita", "bhujbal"];
    console.log("the task parameter is inserted into the array");
    arrName.push(params);
    return arrName.length;
}
console.log(addTask("a"));
// console.log(arrName.length);
