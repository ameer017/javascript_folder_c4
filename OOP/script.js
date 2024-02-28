// OOP --> Object Oriented Programming -->  a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.
// OOP was developed to make code more flexible and easier to maintain.

// The object can be created in two ways in JavaScript:

// Object Literal
// Object Constructor

// using an Object literal:
// Defining object
let person = {
  first_name: "Salman",
  last_name: "Kofoshi",

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

// ================== The This keyword =================
// This keyword is used to reference the object that is executing the the current function, in other words every function has a reference to it's current execution context.

function Sentence(words) {
  //The Sentence function is defined using the constructor function syntax.
  this.words = words;

  console.log(this);
}

const S = new Sentence("hello there, we are learning about This keyword");

function Car(color, brand, wheels) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;

  console.log(this);
}

const blueCar = new Car("blue", "BMW", 4);
const redCar = new Car("red", "Ferrari", 4);

// create a Cohort function with params (name, age, favFood, phoneNo, birthday), create new instances for three different cohorts, log the params argument on to the console. --> birthday should be a new Date instance.

function Cohort(name, age, favFood, phoneNo, birthday) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
  this.phoneNo = phoneNo;
  this.birthday = birthday;

  console.log(this);
}

const cohort1 = new Cohort(
  "Azeez Raheem",
  24,
  "Biscuit",
  812345678,
  new Date("17 July, 2010")
);
const cohort2 = new Cohort(
  "Tunmise Olorundare",
  34,
  "Rice and Okra",
  812345678,
  new Date("17 July, 2010")
);
const cohort3 = new Cohort(
  "Nafisat Adeola",
  27,
  "Garri and fried Egg",
  7,
  new Date("17 July, 2010")
);

// =============== Class ==============
// A Class is a schema for an object that can save many values, and just as you can define function expressions and function declarations, a class can be defined in two ways: a class declaration or a class expression.
// Declaration
class Shape1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    console.log(this);
  }
}

const $_ = new Shape1(10, 12);

// Expression; there are two ways to write class expression 1--> the class is anonymous but assigned to a variable
const Shape = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const BigBoy = class Bigie {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // getter
  get him() {
    return this.coder();
  }

  // method
  coder() {
    return { name: this.name, age: this.age };
  }
};

const instance = new BigBoy("Paiko", 40);
console.log(instance.him);

// with an unanonymous class function expression named RectShape, create a constructor with params (height & width), get the area of a rectangle using getter and calculate method, create a new instance for the RectShape with its relative arguments.. answer should be displayed in the console.
const RectShape = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
};

const square = new RectShape(10, 10);

console.log(square.area);

class Person {
  constructor(name, age, working) {
    this.name = name;
    this.age = age;
    this.working = working;
  }
}

let user = new Person("John", 24, true);

console.log(user);

// Difference between CONST & CLASS
// const can only create one object.

// const detailOne = {
//   name: 'Bashirat',
//   age: 360,
//   isBlack: false
// }

// const detailTwo = {
//   name: 'Oloye',
//   age: 460,
//   isBlack: true
// }

// const detailThree = {
//   name: 'Kenny',
//   age: 560,
//   isBlack: false
// }

// const detailFour = {
//   name: 'Zainabu',
//   age: 660,
//   isBlack: false
// }

// const getDetailOne = new detailOne()
// console.log(getDetailOne)

class Detail {
  constructor(name, age, isBlack) {
    this.name = name;
    this.age = age;
    this.isBlack = isBlack;
  }
}

const detailOne = new Detail("Bashirat", 360, false);
const detailTwo = new Detail("Oloye", 460, true);
const detailThree = new Detail("Kenny", 560, false);
const detailFour = new Detail("Zainabu", 660, false);

// We can do the same thing we did up there using normal function
const createPerson = (name, age, isPretty) => {
  const userSchema = {
    name,
    age,
    isPretty,
  };
  return userSchema;

  // return {name, age, isPretty} without creating the userSchema object
};

const personCreated = createPerson("Melissa", 20, true);
console.log(personCreated);
