// Exercise 1
console.log("| 1.1 Ex 1 N★☆☆ | -------------------------------------------");
// Function conversion: You have a function 'add' that accepts two parameters and returns their sum.
// Convert it into an arrow function. For example: function add(a, b) {return a + b;}.

let a = 6;
let b = 2;
let arrow_function;

arrow_function = (a, b) => a + b;
console.log(`Variable values are a = ${a} and b = ${b}`);
console.log("Result of ARROW FUNCTION (a, b) => (a + b) = ", arrow_function(a, b));

// Exercise 2
console.log("| 1.1 Ex 2 N★☆☆ | -------------------------------------------");
// Arrow function without parameters: Create an arrow function called randomNumber that
// doesn't need parameters and returns a random number between 0 and 100.

let random_number;

function randomNumber() {
    return(Math.floor(Math.random() * 100));
};
random_number = randomNumber();
console.log("Result of RANDOM_NUMBER = ", random_number);

// Exercise 3
console.log("| 1.1 Ex 3 N★☆☆ | -------------------------------------------");
// Use of 'this' in arrow functions: Create a class 'Person' that has a property 
// 'name' and a 'greet' function that uses an arrow function. 
// The function should print a greeting that includes the person's name. 
// For example: console.log(Hello, ${this.name});.

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

// Exercise 4
console.log("| 1.1 Ex 4 N★★☆ | -------------------------------------------");
// Exercise 4
// Arrow function inside a loop: Create a function named printNumbers that accepts an array of numbers 
// and uses a for loop to print each number to the console using an arrow function.
let num_array = [1,3,34,49,45,7];

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        (() => (console.log(numbers[i])))();
    }
};
printNumbers(num_array);

// Exercise 5
console.log("| 1.1 Ex 5 N★★★ | -------------------------------------------");
console.log("Scroll down and wait 3000ms, result it will appear at the bottom");
// Exercise 5
// Arrow function with 'setTimeout': Create an arrow function that prints a message to the console 
// after waiting for 3 seconds.

setTimeout(() => {console.log('Delayed output | 1.1 Ex 5 N★★★ | with 3000ms of delay')}, 3000);

/**************************************************************************/
/**************************************************************************/

// Exercise 1
console.log("| 1.2 Ex 1 N★☆☆ | -------------------------------------------");
// Basic ternary operator: Write a function canDrive that accepts age as a parameter 
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

// Exercise 2
console.log("| 1.2 Ex 2 N★☆☆ | -------------------------------------------");
// Use with comparison operators: Write an expression that uses the ternary operator to determine 
// which of the two given numbers (num1 and num2) is larger. If num1 is larger, return 'num1 is larger'. 
// Otherwise, return 'num2 is larger'.
let num_a = 73;
let num_b = 100;

function compare_numbers(numberA, numberB) {
    compare = numberA > numberB ? `The number ${numberA} is bigger than ${numberB}` : `The number ${numberA} is NOT bigger than ${numberB}`
    console.log(compare);
};
compare_numbers(num_a, num_b);

// Exercise 3
console.log("| 1.2 Ex 3 N★★☆ | -------------------------------------------");
// Chained ternary operators: Write an expression that uses chained ternary operators to determine 
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


// Exercise 4
console.log("| 1.2 Ex 4 N★★★ | -------------------------------------------");
// Ternary operator inside a loop: Write a function parOImpar that accepts an array of numbers 
// and uses a loop to iterate through the array. Inside the loop, 
// use the ternary operator to determine if each number is even or odd.
let i;
let numbers = [1,6,-3,4,8,0,4,7,5];
function parOImpar (array) {
    for (i =0; i < array.length; i++) {
        console.log(`Number ${array[i]} is ${array[i] % 2 != 0 ? "odd" : "even"} `)
    }
}
parOImpar(numbers);

console.log("| 1.3 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.3 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.3 Ex 3 N★★☆ | -------------------------------------------");
console.log("| 1.3 Ex 4 N★★☆ | -------------------------------------------");
console.log("| 1.3 Ex 5 N★★★ | -------------------------------------------");

console.log("| 1.4 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.4 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.4 Ex 3 N★★☆ | -------------------------------------------");
console.log("| 1.4 Ex 4 N★★☆ | -------------------------------------------");
console.log("| 1.4 Ex 5 N★★★ | -------------------------------------------");
console.log("| 1.4 Ex 6 N★★★ | -------------------------------------------");

console.log("| 1.5 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.5 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.5 Ex 3 N★☆☆ | -------------------------------------------");
console.log("| 1.5 Ex 4 N★☆☆ | -------------------------------------------");
console.log("| 1.5 Ex 5 N★★☆ | -------------------------------------------");
console.log("| 1.5 Ex 6 N★★★ | -------------------------------------------");

console.log("| 1.6 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.6 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.6 Ex 3 N★☆☆ | -------------------------------------------");
console.log("| 1.6 Ex 4 N★★☆ | -------------------------------------------");
console.log("| 1.6 Ex 5 N★★☆ | -------------------------------------------");
console.log("| 1.6 Ex 6 N★★★ | -------------------------------------------");

console.log("| 1.7 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.7 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.7 Ex 3 N★☆☆ | -------------------------------------------");
console.log("| 1.7 Ex 4 N★☆☆ | -------------------------------------------");
console.log("| 1.7 Ex 5 N★★☆ | -------------------------------------------");
console.log("| 1.7 Ex 6 N★★★ | -------------------------------------------");

