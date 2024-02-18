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

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore());

// Local scope / Function scope ==> Variables defined inside a function are in the local scope.
const firstFunction = () => {
    const bean = "Janny"
    console.log(bean);
}

// console.log(bean) this will return undefined since we are trying to access a local variable globally

firstFunction();
// Global Scope

const someFunction = () => {
  // Local Scope #1

  const anotherFunction = () => {
    // Local Scope #2
  };
};
