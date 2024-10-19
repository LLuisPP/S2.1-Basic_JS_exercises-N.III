/**************************************************************************/
/********************************** 1.1 ***********************************/
/**************************************************************************/

// Exercise 1 - Function conversion:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 1 N★☆☆ | -------------------------------------------");
// You have a function 'add' that accepts two parameters and returns their sum.
// Convert it into an arrow function. For example: function add(a, b) {return a + b;}.

let a = 6;
let b = 2;
let arrow_function;

arrow_function = (a, b) => a + b;
console.log(`Variable values are a = ${a} and b = ${b}`);
console.log("Result of ARROW FUNCTION (a, b) => (a + b) = ", arrow_function(a, b));

// Exercise 2 - Arrow function without parameters:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 2 N★☆☆ | -------------------------------------------");
// Create an arrow function called randomNumber that
// doesn't need parameters and returns a random number between 0 and 100.

let random_number;

function randomNumber() {
    return(Math.floor(Math.random() * 100));
};
random_number = randomNumber();
console.log("Result of RANDOM_NUMBER = ", random_number);

// Exercise 3 - Use of 'this' in arrow functions:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 3 N★☆☆ | -------------------------------------------");
// Create a class 'Person' that has a property 'name' and a 'greet' function that uses an arrow function. 
// The function should print a greeting that includes the person's name. For example: console.log(Hello, ${this.name});.

class person {
    constructor (name) {
        this.name = (name);
    }
    greet = () => {
        console.log(`Hola ${this.name} !Bienvenido!`)
    }
};
let name1 = new person('Juan');
name1.greet();

// Exercise 4 - Arrow function inside a loop:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 4 N★★☆ | -------------------------------------------");
// Create a function named printNumbers that accepts an array of numbers 
// and uses a for loop to print each number to the console using an arrow function.
let num_array = [1,3,34,-49,45,7];

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        (() => (console.log(numbers[i])))();
    }
};
printNumbers(num_array);

// Exercise 5 - Arrow function with 'setTimeout':
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 5 N★★★ | -------------------------------------------");
console.log("Scroll down and wait 3000ms, result it will appear at the bottom");
// Create an arrow function that prints a message to the console 
// after waiting for 3 seconds.

setTimeout(() => {console.log('Delayed output | 1.1.5 | with 3000ms of delay')}, 3000);

/**************************************************************************/
/********************************** 1.2 ***********************************/
/**************************************************************************/

// Exercise 1 - Basic ternary operator:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 1 N★☆☆ | -------------------------------------------");
// Write a function canDrive that accepts age as a parameter 
// and uses the ternary operator to determine if the user can drive. If the age is 18 or older, 
// it should return 'You can drive'. Otherwise, it should return 'You cannot drive'.
let age1 = 36;
let age2 = 17;

function age_filter2(age) {
    filtered = age >= 18 ? `Person with age ${age} can drive vehicles` : `Person with ${age} can NOT drive vehicles`;
    console.log(filtered);
};

age_filter2(age1);
age_filter2(age2);

// Exercise 2 - Use with comparison operators:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 2 N★☆☆ | -------------------------------------------");
// Write an expression that uses the ternary operator to determine 
// which of the two given numbers (num1 and num2) is larger. If num1 is larger, return 'num1 is larger'. 
// Otherwise, return 'num2 is larger'.
let num_a = 73;
let num_b = 100;

function compare_numbers(numberA, numberB) {
    compare = numberA > numberB ? `The number ${numberA} is bigger than ${numberB}` : `The number ${numberA} is NOT bigger than ${numberB}`
    console.log(compare);
};
compare_numbers(num_a, num_b);

// Exercise 3 - Chained ternary operators:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 3 N★★☆ | -------------------------------------------");
// Write an expression that uses chained ternary operators to determine 
// if a number is positive, negative, or zero.
// Ternary operator with functions: Create a function findMax that accepts three parameters (a, b, c) 
// and uses the ternary operator to determine the maximum value.
let n_1 = -12;
let n_2 = 73;
let n_3 = 36;

function determine_value(number) {
    value = number < 0 
    ? `The number ${number} is negative` 
    : number === 0 
    ? `The number ${number} is zero` 
    : `The number ${number} is positive`;
    console.log(value);
};
determine_value(n_3);

function findMax(n_1, n_2, n_3) {
    return n_1 >= n_2 && n_1 >= n_3 ? n_1 : n_2 >= n_1 && n_2 >= n_3 ? n_2 : n_3;
}
determine_value(findMax(n_1, n_2, n_3));


// Exercise 4 - Ternary operator inside a loop:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 4 N★★★ | -------------------------------------------");
// Write a function parOImpar that accepts an array of numbers 
// and uses a loop to iterate through the array. Inside the loop, 
// use the ternary operator to determine if each number is even or odd.
let i;
let numbers = [1,6,-3,4,8,0,4,7,5];
function parOImpar (array) {
    for (i = 0; i < array.length; i++) {
        console.log(`Number ${array[i]} is ${array[i] % 2 != 0 ? "odd" : "even"} `)
    }
}
parOImpar(numbers);

/**************************************************************************/
/********************************** 1.3 ***********************************/
/**************************************************************************/

// Exercise 1 - Basic Callback:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 1 N★☆☆ | -------------------------------------------");
// Write a function called processar that accepts two parameters:
// a number and a callback function. The processar function should invoke the callback function,
// passing the number as a parameter.
let num_c = 3;

function processar(num, callback) {
    callback(num);
}

function elevar_al_cuadrado(num) {
    console.log(`${num} al cuadrado es: ${num * num}`)
}

processar(num_c, elevar_al_cuadrado);


// Exercise 2 - Callbacks with Mathematical Operations:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 2 N★☆☆ | -------------------------------------------");
// Write a function called calculadora that accepts three parameters:
// two numbers and a callback function. The calculadora function should invoke the callback function with the
// two numbers as parameters. Then, call calculadora with a function that performs the addition of the two numbers.
function calculadora (num1, num2, callback) {
    callback(num1, num2);
}

function sumar_numeros(num1, num2) {
    console.log(`Sumar ${num1} + ${num2} = ${num1 * num2}`);
}
 calculadora(3, 4, sumar_numeros);


// Exercise 3 - Using Callbacks in Asynchronous Functions:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 3 N★★☆ | -------------------------------------------");
// Write a function called esperarISaludar
// that accepts two parameters: a name and a callback function. The function should wait for 2 seconds and
// then invoke the callback function, passing the name as a parameter.
console.log("Scroll down and wait 2000ms, result it will appear at the bottom");
function esperarISaludar (name, callback) {
    callback(name);
}

function mensaje_delayed(name) {
    setTimeout(() => {
        console.log(`Delayed Hola ${name}!! | 1.3.3 | with 2000ms of delay`)
    },2000);
}

esperarISaludar("Miguel", mensaje_delayed);


// Exercise 4 - Callbacks with Arrays:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 4 N★★☆ | -------------------------------------------");
// Write a function called processarElements that accepts two parameters:
// an array and a callback function. The processarElements function should invoke the callback
// function for each element of the array.
let array2 = [1,23,5,8,9,54,27];
function processarElements(array, callback) {
    callback(array2);
}

function parOImpar (array) {
    for (i =0; i < array.length; i++) {
        console.log(`Number ${array[i]} is ${array[i] % 2 != 0 ? "odd" : "even"} `)
    }
}

processarElements(array2, parOImpar)


// Exercise 5 - Write a function processString that accepts two parameters:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 5 N★★★ | -------------------------------------------");
// a string and a callback function.
// The function processString should convert the string to uppercase and then invoke the callback
// function with the transformed string.
let string = "Esto esta en minUsCuLas Y paSa A MaYuScULas";
let result = "";
function processString(str, callback) {
    for (i = 0; i < str.length; i++) { 
        if (str[i] >= 'a' && str[i] <= 'z') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    callback(result);
}

function print_str(str) {
    console.log(`string: ${str}`);
}

processString(string, print_str);


/**************************************************************************/
/********************************** 1.4 ***********************************/
/**************************************************************************/

// Exercise 1 - Spread Operator in Arrays:
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 1 N★☆☆ | -------------------------------------------");
// Create two arrays, array1 and array2. Use the spread operator
// to create a third array that contains all the elements from array1 and array2.
let array_1 = [1,2,48,5,17,8,-23,4,74];
let array_2 =  [66,23,-45,88,35,2,11];

let array_combined = [...array_1, ...array_2];

console.log(`El array 1 : ${array_1} combinado con ${array_2} resulta en ${array_combined}`);


// Exercise 2 - Rest Operator in Functions: 
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 2 N★☆☆ | -------------------------------------------");
// Create a function called sum that uses the rest operator to accept an indefinite
// number of arguments and return their sum.
function sum(...nums) {
    console.log(`rest op shows: ${nums}`);
}

sum(1,3,4,6,7,8,3);
sum(-34,8,56);


// Exercise 3 - Copying Objects with Spread
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 3 N★★☆ | -------------------------------------------");
// Create an object 'object1'. Then create a second object, 'object2', that is a copy of 'object1' using the spread
// operator. Change a property in 'object2' and check that 'object1' has not changed.
let object1 = {name: 'luis', height: 1.66}
let object2 = {...object1, height: 2.70}

console.log(object1);
console.log(object2);


// Exercise 4 - Rest in Destructuring:
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 4 N★★☆ | -------------------------------------------");
// Create an array with several elements. Use destructuring and the rest operator to assign the first two elements
// to variables, and then assign the rest of the elements to a third variable.
let array_3 = [1,-2,48,-5,"verde",8,-23,4];
let [first, second, ...rest] = array_3;

console.log(`First: ${first}`);
console.log(`Second: ${second}`);
console.log(`Third: ${rest}`);


// Exercise 5 - Spread in Functions
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 5 N★★★ | -------------------------------------------");
// Create a function that accepts three arguments. Then, create an array with three elements and call the
// function using the spread operator with this array.



// Exercise 6
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 6 N★★★ | -------------------------------------------");

/**************************************************************************/
/********************************** 1.5 ***********************************/
/**************************************************************************/

console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 1 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 2 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 3 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 4 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 5 N★★☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 6 N★★★ | -------------------------------------------");

/**************************************************************************/
/********************************** 1.6 ***********************************/
/**************************************************************************/

console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 1 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 2 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 3 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 4 N★★☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 5 N★★☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 6 N★★★ | -------------------------------------------");

/**************************************************************************/
/********************************** 1.7 ***********************************/
/**************************************************************************/

console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 1 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 2 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 3 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 4 N★☆☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 5 N★★☆ | -------------------------------------------");
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 6 N★★★ | -------------------------------------------");

