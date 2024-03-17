// const a = 10;
// const b = 15;
// let resullt = 0;

// // ADDITION

// result = a + b;
// console.log(result);

// // MULTIPLICATION

// resullt = a * b;
// console.log(resullt);

// // DIVISION
// resullt = a / b;
// console.log(resullt);

// //EXPONENTATION
// resullt = a ** b;
// console.log(resullt);

// // SUBTRACTION
// resullt = a - b;
// console.log(resullt);

// MODULE OPERATOR
// const g = 15;
// const h = 11

// const result2 = g % h;
// console.log(result2);

// let  number = 5;

// number ++;
// console.log(number);


// let number = 5;
// number --;
// console.log(number);
// // comparison

// const c = 76;
// const d = 50;
// console.log( c >= d);

// // greater than
// console.log(c > d);


// // less than
// const e = 10;
// const f = 5;
// console.log( e < f);


// // Not Equal to
// const g = 4;
// const h = 8;
// console.log(g != h);



// STRICT EQUALITY

// console.log(20 === '20');
// console.log(20 === 20);
// console.log(10 !== 20);



// // loose equality
// console.log('0' == '');
// console.log(0 == '');

// console.log(false == '0');
// console.log(false == 'false');


// BASIC OPERATORS
// const thisYear = 2023;
// const ageMathew = thisYear - 1998;
// const ageAli = thisYear - 1990;

// console.log(ageMathew, ageAli);


// ASSIGNMENT OPERATORS
// plus or equal
// let salary = 2000;
// console.log(salary);

// let salaryPlus = 870;

// let moreSalary = salary += salaryPlus;
// console.log(moreSalary);


// // minus or equal
// let balance = 5000;
// console.log(balance);

// let balanceMinus = 480;

// let remainBalance = balance -= balanceMinus;
// console.log(remainBalance);

// // Multiplication or equal
// let biscuitPrice = 100;
// console.log(biscuitPrice);

// let fiveBiscuit = 5;
// let totalBiscuit = biscuitPrice *= fiveBiscuit;
// console.log(totalBiscuit);

// // Division or eqaul 
// let myAge = 40;
// console.log(myAge);

// let childAge = 4;
// let age = myAge /= childAge;
// console.log(age);

// LOICAL OPERATOR TO
const age = 19;
const isCool = true;

if (isCool && age > 18) {
    console.log('You are eligible to vote')
} else {
    console.log('come back next year')
}

console.log('truthy' && 'true' && '0' && 999)
console.log(false && '' && null);

console.log('truthy' || 'test' || 999)
console.log('' || 0 || 999);

console.log(!false)