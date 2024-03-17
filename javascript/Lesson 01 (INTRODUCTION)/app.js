
//********************************* STRINGS (Single, double quotes & Back ticks) *********************************************************
var variableName = "welcome to js";
console.log(variableName);

let reusable = "hello";
console.log(reusable);

reusable = "html";
console.log(reusable);

const data = "java";
console.log(data);

const data1 = "hello world";
console.log(data1);

//***************************************************BACKTICKS *******************************/
const backticks = `Hello ${2+2}`
console.log(backticks);

//************************************** NUMBER **********************************************
const wholeNumber = 5;
console.log(wholeNumber);

const decimal = 0.4;
console.log(decimal);

const firstNumber = 5;
const secondNumber = 10;

const result2 = firstNumber + secondNumber;
console.log(result2);
console.log(typeof result2);  //To show data types, use "typeof"


//*********************************** BOOLEAN *****************************************************
const isCool = true;
console.log(isCool)
console.log(typeof isCool)  //To show data types, use "typeof"

const isRight = true;
if (isRight) {
    console.log("Hi Mr. Man, you are right");
} else {
    console.log("you are wrong");
}


//************************** OBJECT = {key:"value"}  (Multi-Object data type)****************************************

const person = {
//    Key    :  "Value"
    firstName: "Aliyu",
    lastName: "Muhammad"
}

console.log(person);
console.log(person.lastName); //To call the lastName which is "Muhammad"  (Dot notation)


//****************************MULTIPLICATION************************************************ */
const c = 5;
const d = 15;
console.log(c*d);


//**************************** EXPONENTIAL ************************************************
const a = 5;
const b = 15;
let result = 0;
result = a ** b;

console.log(result);


//**********CLASSWORK*************
let firstName = "Roqib ";
let lastName = "Yusuf ";
let middleName = "Olasunkanmi";
const fullName = firstName + lastName + middleName;

console.log(fullName);


//***********CLASSWORK 2***********
const courses = {
    course1: "GNS101",
    course2: "EEE231",
    course3: "MEE216",
    course4: "MTH101"
}

console.log(courses);


const x = 13
const y = 12
let result3 = 0
result3 = 13/12

console.log(result3);


//*********************** INCREMENT AND DECREMENT OPERATOR ****************************/
let result4 = 0;
result4++;
console.log(result4);


//************************* SINGLE OBJECT DATA TYPE ******************************/
const date = new Date()
console.log(date)


const arr = ["mango", "pawpaw", "orange", "banana"];
console.log(typeof arr);


//*************************************** DAY 2 *****************************************************
const add = '2+2';
console.log(add);

const add2 = `${2+2}`;
console.log(add2);


