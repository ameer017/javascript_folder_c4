// A JavaScript function is a block of code designed to perform a particular task. Remember that, a block of code designed to perform a particular task.

// When talking about functions, you're often going to hear two terms: function declaration and function call.

// function is the reserved JavaScript keyword for creating a function.

// square
// is the name of the function, you can name it however you'd like.

// ... then inside of parentheses we have something known as parameters. Parameters are values we're going to send to our function when calling it. The function
// square
// takes one parameter, called
// number
//  Names of parameters do not matter, you can name them however you'd like.

// fn declaration, expression, arrow
// 1. function declaration
function name(params) {
  // statements to be executed
  // accepts "this" keyword
}

function square(number) {
  return number * number;
}

// function call/invoking
const result = square(5);

console.log(result);

// 2. fn expression
const nameFn = function (params) {
  // statement
};

// 3. An Arrow Function Expression is a shorter syntax for writing function expressions. ==> best practice
const nameFns = (params) => {
  // statements
};

nameFns();

// imagine entering a restaurant with your id, when you input your name into the machine - it greets you with the name
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

sayHi("Joe"); //invoke
sayHi("Jane"); //invoke

// Every function in JavaScript returns undefined unless otherwise specified. That means, if we don't say what do we want our function to return, it is always going to return undefined.

function add(a, b) {
  return a + b;
}

const sum = add(2, 2);
console.log(sum);

//  Another important rule of the return statement is that it stops function execution immediately.

function test() {
  return true;
  return false;
}

test();

//   Arrow function.
const div = (number) => {
  return number / number;
};

const answer = div(5)
console.log(answer);

const square2 = (number) => number * number;
const square3 = number => number * number; // you can make arrow fn very concise by removing the parenthesis around one parameter but what's not accepted ⬇️

// const notAccepted = a , b => {}

// Parameters are used when defining a function, they are the names created in the function definition. Parameter is like a variable that is only meaningful inside of this function. It won't be accessible outside of the function.

// Arguments are real values passed to the function when making a function call.

const sayHello = (firstName) => { //one param
  console.log(`Hello ${firstName}`)
}
sayHello('Eef') //argument

const data = (name, age) => { //two params
  console.log(`${name} is ${age} years old`)
}
data('Eef', 25) //argument

// you can also pass val directly to the param, this is called default parameter
const dataSpec = (name, age = 7.5) => { //two params
  console.log(`${name} is ${age} years old`)
}
dataSpec('Zainab') //argument

// ⬆️ doesn't really make sense

// how can we get NAN value from a function?
const addUp = (a = 0, b = 0) => { //failsafe here
  return a + b
}

const sumUp = add(5, 5);
console.log(sumUp);