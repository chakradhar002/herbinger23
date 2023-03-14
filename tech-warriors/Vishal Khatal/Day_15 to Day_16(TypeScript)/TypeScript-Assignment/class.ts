/* A class is a blueprint for creating objects with specific functions and properties already attached
to it. */
class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Vishal");
  
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private