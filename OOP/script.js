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
// Using a constructor
function personTwo(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new personTwo("Hayzed", "Mabululu");
let person2 = new personTwo("Zainab", "Muritala");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);


// ========================= new keyword ======================
