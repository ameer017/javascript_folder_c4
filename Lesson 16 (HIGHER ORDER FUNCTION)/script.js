function double (n) {
   return n*2
}

console.log(double(5));

// ****************** METHODS TO USE ***********************
/*
forEach()
filter()
map()
sort()
reduce()
*/

const companies= [
   {name: "Company One", category: "Finance", start: 1981, end: 2004},
   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
 ];
 
//Companies that lasted for at least 10 years
const filteredRetail = companies.filter((company) => (company.end - company.start) >= 10)
console.log(filteredRetail);

//*************for loop method 
// for (let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
// }

// console.log(companies[3].name);

//*************forEach method
// companies.forEach(function(company) {
//    console.log(company.name);
// })
companies.forEach((company) => {
   console.log(company.name);
})



const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//*************filter method
//get 21 and older


const whoCanDrink = ages.filter(age => age >= 21)

console.log(whoCanDrink);

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//    if (ages [i] >= 21) {
//       canDrink.push(ages[i])
//    }
// }
// console.log(canDrink);


// *************filter Method 
//With Function Declaration

// const canDrink = ages.filter(function(age) {
//    if (age >= 21) {
//       return true
//    }
// })
// console.log(canDrink);

//With Arrow Function
const canDrink = ages.filter(age => age >= 21)
console.log(canDrink);

//Filter the company
//Function Declaration
//Filter companies with categories of "Retail"
const retailsCompanies = companies.filter(function(company) {
   if (company.category === 'Retail') {
      return true
   }
})
console.log(retailsCompanies);

//Arrow Function
const retailsCompany = companies.filter(company => company.category === "Retail")
console.log(retailsCompany);

//Companies that lasted 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10 )
console.log(lastedTenYears);

// ******************* map Method ***********************************
const compName = companies.map(function(company) {
    return(company.name)
   
})
console.log(compName);

// *********Get Company NamedNodeMap, start and End 
//Function Declaration
const compName2 = companies.map(function(company) {
   return (`${company.name} [Start: ${company.start} - End: ${company.end}]`)
   
})
console.log(compName2);

//Arrow Function
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap);

// ************************
const agemap = ages
   .map(age => Math.sqrt(age))
   .map(age => age *2)
// console.log(agemap);

//************************* Sort Method ******************************
const sortedCompanies = companies.sort(function(c1, c2){
   if (c1.start > c2.start) {
      return 1
   } else {
      return -1
   }
})
console.log(sortedCompanies);

// ***************************
//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const companiesSorted = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
console.log(companiesSorted);

// ********************************
const sortAges = ages.sort((a, b) => a-b)
console.log(sortAges);


//**************************** reduce method ********************************
// for loop method 
let ageSum = 0
for (let i = 0; i < ages.length; i++) {
   ageSum += ages[i]
}
console.log(ageSum);

// reduce method 
const ageSum1 = ages.reduce(function(total, age) {
   return total + age
}, 0)
console.log(ageSum1);

const ageSum2 = ages.reduce((total, age) => (total + age), 0)
console.log(ageSum2);

//to get years of all company
const totalYears = companies.reduce((total, company) => total += (company.end - company.start), 0)
console.log(totalYears);


//***************Combined of all methods************************
const combined = ages
   .map(age => age * 2)
   .filter(age => age >= 40)
   .sort ((a, b) => a-b)
   .reduce((a, b) => a+b, 0)
   console.log(combined);



   // ******************************************SPREAD AND REST OPERATOR***********************************
   const add = (a, b) => {
      return a + b
   }

   console.log(add(2, 2, 2, 2)); //Showing Unexpected answer

   //**********Rest Operator*************
   const addNo = (...args) => {
      console.log(args);
      return args.reduce((acc, val) => acc += val)
   }
   console.log(addNo(2, 2, 2, 2));


// Spread Operator 
//Mutable
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

//Immutable
const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = [...numbers1, 6];
console.log(numbers1);
console.log(newNumbers);


//******************************* OBJECT AND ARRAY DESTRUCTURING *****************************************
const persons = {
   firstName: 'Gary',
   lastName: 'Vee',
   car: {
      color: 'red',
      wheel: 4
   },
   animal: {
      dog: {
         name: 'fluffy',
         age: 20
      },
      cat: {
         name: 'Kitty',
         age: 10
      }
   }
}

//Destructuring
// const {firstName, lastName, car:{color,wheel}, animal: {cat, dog}} = persons
// console.log(color);

const {firstName:namez='Muhammed', lastName, ...resteds /*lastName, animal:{cat, ...rested}*/} = persons
console.log(namez);
console.log(resteds);

//ARRAY Destructuring
const introduction = ['Hello', 'i', 'am', 'Sarah', 'Checked']

const[greet,, verb, name, testing='Lets go'] = introduction
console.log(greet);
// console.log(rest);
console.log(testing);

// const [greeting,,, name] = introduction
// console.log(greeting, name);


const nums = [1, 4, 5, 2, 9]
const [numOne, numFour, ...theRest] = nums

// console.log(numFour);
console.log(theRest);