/* A class is a blueprint for creating objects with specific functions and properties already attached
to it. */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Vishal");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
