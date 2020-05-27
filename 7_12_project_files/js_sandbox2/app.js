// const sayHello = function () {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello world!");
// }

// One-line functions don't need braces!
// const sayHello = () => console.log("Hello there!");

// A one-line return.  This is easier that creating a function that just contains a 'return' statement.
// const sayHello = () => "Hello Robert!";
// console.log(sayHello());

// Same as above
// const sayHello = function () {
//   return "Hello";
// }
// console.log(sayHello());

// Return object
// const sayHello = () => ({ msg: "Hello" });
// console.log(sayHello());

// Single parameter doesn't need parentheses
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Robert');

// Multiple parameters require parentheses
// const sayHello = (fname, lname) => console.log(`Hello ${fname} ${lname}`);
// sayHello('Robert', 'Flaugher');

// Mapping
const beatles = ['Paul', 'George', 'John', 'Ringo'];

// First map
// const nameLengths = beatles.map(function (name) {
//   return name.length;
// });

// Shorter map
// const nameLengths = beatles.map((name) => {
//   return name.length;
// });

// Shortest map
// const nameLengths = beatles.map(name => name.length);

// console.log(nameLengths);