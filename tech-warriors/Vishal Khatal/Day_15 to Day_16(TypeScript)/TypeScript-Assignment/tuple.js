// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [20, false, 'my name is vishal'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('we can add new name');
console.log(ourTuple);
