// Javascript Scope simply allows us to know where we have access to our variables. It shows us the accessability of variables, functions, and objects in some particular part of the code.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Hayzed";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply());



// Local scope / Function scope ==> Variables defined inside a function are in the local scope.
const firstFunction = () => {
    const bean = "Janny"
    console.log(bean);
}

// console.log(bean) this will return undefined since we are trying to access a local variable globally

firstFunction();


// A nested function example
const someFunction= () => {
    const name = "DLT Africa"
    const num1 = 2;
    const num2 = 3;
  
    const otherFunction = () => {
      return `${name} academy is ${num1 + num2} years old`;
    }
  
    return otherFunction();
  }
  
  console.log(someFunction());