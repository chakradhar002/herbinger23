interface TodoInterface {
    tasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
  }

  class Todo implements TodoInterface {
    tasks: string[] = [];
  
    addTask(task: string): number {
      this.tasks.push(task);
      console.log(`Task "${task}" has been added to the list.`);
      return this.tasks.length;
    }
  
    listAllTasks(): void {
      console.log("List of tasks:");
      this.tasks.forEach((task) => console.log(task));
    }
  
    deleteTask(task: string): number {
      let index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task "${task}" has been deleted from the list.`);
        return this.tasks.length;
      } else {
        console.log(`Task "${task}" not found in the list.`);
        return -1;
      }
    }
  }
  
  let todo = new Todo();
  todo.addTask("Buy milk");
  todo.addTask("Buy bread");
  todo.addTask("Buy eggs");
  todo.listAllTasks();
  todo.deleteTask("Buy bread");
  todo.listAllTasks();
  