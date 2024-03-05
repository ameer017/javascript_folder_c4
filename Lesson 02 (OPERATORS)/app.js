//*************************** ARITHMETIC OPERATORS ************************************************
const a = 4;
const b = 5;

let result = 0;
result = a + b;
console.log(result);

result = a - b;
console.log(result);

result = a * b;
console.log(result);


//******************** COMPARISON OPERATORS (>, <, >=, <=, ==, !=) *******************************
const _a = 10;
const _b = 10;

console.log(_a >= _b);


const $a = 10;
const $b = 5;

console.log($a == $b);


const c = 15;
const d = 5;

console.log(c >= d);


const _c = 15;
const _d = 15;

console.log(_c != _d);


//******************* STRICT (===) VS LOOSE (==) EQUALITY *************************

//******STRICT EQUALITY 
console.log(5 === 5);
console.log(10 === '10')
console.log(5 === 4);
console.log(5 === "5");
console.log(false === false);
console.log(false === 'false');
console.log(true === 1);
console.log(0 === '');

//****** STRICT NOT EQUAL TO (!==)
const f = 10;
const g = 10;
console.log(f !== g);

//******LOOSE EQUALITY 
console.log(5 == "5");
console.log(true == 1);
console.log("" == '0');
console.log("" == 0);
console.log(false == 'false');



//*************************LOGICAL OPERATORS (AND[&&], OR[||], NOT[!]) ********************************

//*** AND &&
console.log(true && true && true);
console.log(true && true && false);

//*** OR ||
console.log(false || false || false);
console.log(false || true || false);

//**** NOT !
console.log(!true);


// ********************************** ASSIGNMENT OPERATOR (=, +=, -=, *=, /=) ***************************
let number = 5;
number += 5;
console.log(number);

number *= 5;
console.log(number);

number -= 5;
console.log(number);

number /= 5;
console.log(number);


//****************** CLASSWORK ***************
let salary = 2500;
let moreSalary = 850;

let total = salary += moreSalary
console.log(total);


//************** CLASSWORK ***************
const thisYear = 2023;
const yearOfBirth = 1994;
const age = thisYear - yearOfBirth;

console.log(age);

// CLASSWORK
const johnAge = 22;
const johnMunAge = 2 * johnAge;

console.log(johnMunAge);


//********* CLASSWORK ************
const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

console.log(bmiMark, bmiJohn);

const highestBMI = bmiMark > bmiJohn;
console.log(highestBMI);