/* 1. It is creating an array of fruits.
2. It is sorting the array in alphabetical order.
3. It is removing the last element of the array.
4. It is adding a new element to the end of the array.
5. It is adding two new elements to the end of the array.
6. It is finding the index of an element in the array. */
var fruits = ['Apple', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.pop()); //output: Orange
fruits.push('Papaya');
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
console.log(fruits.indexOf('Papaya')); //output: 2
