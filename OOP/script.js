// OOP --> Object Oriented Programming -->  a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.
// OOP was developed to make code more flexible and easier to maintain.

// The object can be created in two ways in JavaScript:

// Object Literal
// Object Constructor

// using an Object literal:
// Defining object
let person = {
  first_name: "Mukul",
  last_name: "Latiyan",

  //method --> a property whose value is a function
  getFunction: function () {
    return `My name is ${person.first_name} ${person.last_name}`;
  },

  //object within object
  phone_number: {
    mobile: "12345",
    landline: "6789",
  },
};
console.log(person.getFunction());
console.log(person.phone_number.landline);

// Using constructor:
function personTwo(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new personTwo("Hayzed", "Mabululu");
let person2 = new personTwo("Zainab", "Muritala");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// ========================= The 'new' keyword ======================
// The new keyword creates a new empty object

const student = {}; //for simple object definition

const eef = new Object();

student.firstName = "Soliu";
eef.firstName = "Bode";
console.log(student);
console.log(eef);

const arr = [1, 2, 3];
const arr1 = new Array(1, 2, 3);

console.log(arr, arr1);

// The basic use case of the 'new' keyword is for creating date --> date is special object built into javascript --> doesn't have any other syntax
const myBirthDay = new Date("July 17, 2010");
console.log(myBirthDay);

// NB: whenever you create anything in javascript, you're creating a new object that is extended off of a constructor.

// console.log(Array)
// console.log(Object)
// console.log(Number)
// console.log(Date)

const myNumber = new Number(100.0);
console.log(myNumber.toFixed(0));

const numArr = [1, 2, 3, 4]; //This is possible without the "new" keyword with literal syntax
numArr.push(5);
console.log(numArr);
