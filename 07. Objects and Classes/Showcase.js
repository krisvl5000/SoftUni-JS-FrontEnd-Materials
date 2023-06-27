// In JS you do not need to have necessarily created a class to be able to
// instantiate an object. We can define and create one simply by listing all
// properties and their values like so:
let person = { name: 'Kiril', age: 25, colorHair: 'brown', 'My Grades': [5,5,5] };
console.log(person.name);
console.log(person.age);
console.log(person.colorHair);
console.log(person["My Grades"]);

// We can also change the value of a property simply by redefining it:
person.name = 'Gosho';
console.log(person.name);

// We can also define entire switch case structures within a singular function
// using the following syntax:

let count = 0;

const commandParser = {
    increment: (count) => ++count,
    decrement: (count) => --count,
    reset: () => 0,
};

count = commandParser.increment(count);
console.log(count);

count = commandParser.decrement(count);
console.log(count);