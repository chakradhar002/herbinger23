"use strict";
exports.__esModule = true;
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task ".concat(task, " inserted in the list"));
        var count = this.tasks.length;
        console.log("Number of items in the list: ".concat(count));
        return count;
    };
    TaskList.prototype.listAllTasks = function () {
        console.log("List of all Tasks:");
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ": ").concat(task));
        });
    };
    TaskList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Task ".concat(task, " removed from the list"));
        }
        else {
            console.log("Task ".concat(task, " not found in the list"));
        }
        var count = this.tasks.length;
        console.log("Number of items in the list: ".concat(count));
        return count;
    };
    return TaskList;
}());
var taskList = new TaskList();
// Add tasks to the list
taskList.addTask('Buy milk');
taskList.addTask('Wash the car');
taskList.addTask('Walk the dog');
// List all tasks
taskList.listAllTasks();
// Delete a task
taskList.deleteTask('Wash the car');
// List all tasks again
taskList.listAllTasks();
