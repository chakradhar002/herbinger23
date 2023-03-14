var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task \"".concat(task, "\" has been added to the list."));
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("List of tasks:");
        this.tasks.forEach(function (task) { return console.log(task); });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Task \"".concat(task, "\" has been deleted from the list."));
            return this.tasks.length;
        }
        else {
            console.log("Task \"".concat(task, "\" not found in the list."));
            return -1;
        }
    };
    return Todo;
}());
var todo = new Todo();
todo.addTask("Buy milk");
todo.addTask("Buy bread");
todo.addTask("Buy eggs");
todo.listAllTasks();
todo.deleteTask("Buy bread");
todo.listAllTasks();
