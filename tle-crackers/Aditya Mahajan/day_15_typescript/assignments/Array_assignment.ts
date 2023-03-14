export class TaskList {
    private tasks: string[] = [];
  
    public addTask(task: string): number {
      this.tasks.push(task);
      console.log(`Task "${task}" has been added to the list.`);
      const count = this.tasks.length;
      console.log(`Number of tasks in the list: ${count}`);
      return count;
    }
  
    public listAllTasks(): void {
      console.log('List of Tasks:');
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  
    public deleteTask(task: string): number {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task "${task}" has been removed from the list.`);
      } else {
        console.log(`Task "${task}" not found in the list.`);
      }
      const count = this.tasks.length;
      console.log(`Number of tasks in the list: ${count}`);
      return count;
    }
  }
  const taskList = new TaskList();

  taskList.addTask('Buy milk');
  taskList.addTask('Wash the car');
  taskList.addTask('Walk the dog');
  
  taskList.listAllTasks();
  
  taskList.deleteTask('Wash the car');
  
  taskList.listAllTasks();
    