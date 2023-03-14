export interface TaskInterface {
    tasks: string[];
  
    addTask(task: string): number;
  
    listAllTasks(): void;
  
    deleteTask(task: string): number;
  }
  
class TaskList{
  tasks: string[] = [];

  addTask(task: string): number {
    this.tasks.push(task);
    console.log(`Task ${task} inserted in the list`);
    const count = this.tasks.length;
    console.log(`Number of items in the list: ${count}`);
    return count;
  }

  listAllTasks(): void {
    console.log("List of all Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task}`);
    });
  }

  deleteTask(task: string): number {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log(`Task ${task} removed from the list`);
    } else {
      console.log(`Task ${task} not found in the list`);
    }
    const count = this.tasks.length;
    console.log(`Number of items in the list: ${count}`);
    return count;
  }
}

const taskList: TaskInterface = new TaskList();

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