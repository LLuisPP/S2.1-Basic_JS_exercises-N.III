
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
}
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
}
printNumbers(num_array);


// Exercise 5
console.log("| 1.1 Ex 5 N★★★ | -------------------------------------------");



console.log("| 1.2 Ex 1 N★☆☆ | -------------------------------------------");
console.log("| 1.2 Ex 2 N★☆☆ | -------------------------------------------");
console.log("| 1.2 Ex 3 N★★☆ | -------------------------------------------");
console.log("| 1.2 Ex 4 N★★★ | -------------------------------------------");


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

