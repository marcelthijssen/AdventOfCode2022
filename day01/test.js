// Requiring the module
const collect = require('collect.js');

// Sample array
let arr = ['a', 'b', 'c', -3, 4, -6, 7];

// Creating collection
const collection = collect(arr);

// Function call
const result = collection.take(3)

// Printing the result object
let newObject = result.all();
console.log(newObject);
