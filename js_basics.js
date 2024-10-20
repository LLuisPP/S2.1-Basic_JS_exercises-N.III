/**************************************************************************/
/****                               1.1                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.1                         ****\n*************************************************************\n");

// Exercise 1 - Function conversion:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 1 N★☆☆ | --------------------");
// You have a function 'add' that accepts two parameters and returns their sum.
// Convert it into an arrow function. For example: function add(a, b) {return a + b;}.

    let a = 6;
    let b = 2;
    let arrow_function;

    arrow_function = (a, b) => a + b;
    console.log(`Variable values are a = ${a} and b = ${b}`);
    console.log("Result of ARROW FUNCTION (a, b) => (a + b) = ", arrow_function(a, b));


// Exercise 2 - Arrow function without parameters:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 2 N★☆☆ | --------------------");
// Create an arrow function called randomNumber that
// doesn't need parameters and returns a random number between 0 and 100.

    let random_number;

    function randomNumber() 
    {
        return(Math.floor(Math.random() * 100));
    };

    random_number = randomNumber();
    
    console.log("Result of RANDOM_NUMBER = ", random_number);


// Exercise 3 - Use of 'this' in arrow functions:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 3 N★☆☆ | --------------------");
// Create a class 'Person' that has a property 'name' and a 'greet' function that uses an arrow function. 
// The function should print a greeting that includes the person's name. For example: console.log(Hello, ${this.name});.

    class person {
        constructor (name)
        {
            this.name = (name);
        }
        greet = () => {
            console.log(`Hola ${this.name} !Bienvenido!`)
        }
    };
    let name1 = new person('Juan');
    name1.greet();


// Exercise 4 - Arrow function inside a loop:
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 4 N★★☆ | --------------------");
// Create a function named printNumbers that accepts an array of numbers 
// and uses a for loop to print each number to the console using an arrow function.

    let num_array = [1,3,34,-49,45,7];

    function printNumbers(numbers)
    {
        for (let i = 0; i < numbers.length; i++) {
            (() => (console.log(numbers[i])))();
        }
    };

    printNumbers(num_array);


// Exercise 5 - Arrow function with 'setTimeout':
console.log("\x1b[1m\x1b[32m--------------------- | 1.1 Ex 5 N★★★ | --------------------");
console.log("Scroll down and wait 3000ms, result it will appear at the bottom");
// Create an arrow function that prints a message to the console 
// after waiting for 3 seconds.

    setTimeout(() => {console.log('Delayed output | 1.1.5 | with 3000ms of delay')}, 3000);


/**************************************************************************/
/****                               1.2                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.2                         ****\n*************************************************************\n");

// Exercise 1 - Basic ternary operator:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 1 N★☆☆ | --------------------");
// Write a function canDrive that accepts age as a parameter 
// and uses the ternary operator to determine if the user can drive. If the age is 18 or older, 
// it should return 'You can drive'. Otherwise, it should return 'You cannot drive'.

    let age1 = 36;
    let age2 = 17;

    function age_filter2(age)
    {
        filtered = age >= 18 ? `Person with age ${age} can drive vehicles` : `Person with ${age} can NOT drive vehicles`;
        console.log(filtered);
    };

    age_filter2(age1);
    age_filter2(age2);

// Exercise 2 - Use with comparison operators:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 2 N★☆☆ | --------------------");
// Write an expression that uses the ternary operator to determine 
// which of the two given numbers (num1 and num2) is larger. If num1 is larger, return 'num1 is larger'. 
// Otherwise, return 'num2 is larger'.

    let num_a = 73;
    let num_b = 100;

    function compare_numbers(numberA, numberB)
    {
        compare = numberA > numberB ? `The number ${numberA} is bigger than ${numberB}` : `The number ${numberA} is NOT bigger than ${numberB}`
        console.log(compare);
    };

    compare_numbers(num_a, num_b);

// Exercise 3 - Chained ternary operators:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 3 N★★☆ | --------------------");
// Write an expression that uses chained ternary operators to determine 
// if a number is positive, negative, or zero.
// Ternary operator with functions: Create a function findMax that accepts three parameters (a, b, c) 
// and uses the ternary operator to determine the maximum value.

    let n_1 = -12;
    let n_2 = 73;
    let n_3 = 36;

    function determine_value(number)
    {
        value = number < 0 
        ? `The number ${number} is negative` 
        : number === 0 
        ? `The number ${number} is zero` 
        : `The number ${number} is positive`;
        console.log(value);
    };

    determine_value(n_3);

    function findMax(n_1, n_2, n_3)
    {
        return n_1 >= n_2 && n_1 >= n_3 ? n_1 : n_2 >= n_1 && n_2 >= n_3 ? n_2 : n_3;
    }

    determine_value(findMax(n_1, n_2, n_3));


// Exercise 4 - Ternary operator inside a loop:
console.log("\x1b[1m\x1b[32m--------------------- | 1.2 Ex 4 N★★★ | --------------------");
// Write a function parOImpar that accepts an array of numbers 
// and uses a loop to iterate through the array. Inside the loop, 
// use the ternary operator to determine if each number is even or odd.

    let i;
    let numbers = [1,6,-3,4,8,0,4,7,5];

    function parOImpar (array)
    {
        for (i = 0; i < array.length; i++)
        {
            console.log(`Number ${array[i]} is ${array[i] % 2 != 0 ? "odd" : "even"} `)
        }
    }
    parOImpar(numbers);


/**************************************************************************/
/****                               1.3                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.3                         ****\n*************************************************************\n");

// Exercise 1 - Basic Callback:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 1 N★☆☆ | --------------------");
// Write a function called processar that accepts two parameters:
// a number and a callback function. The processar function should invoke the callback function,
// passing the number as a parameter.

    let num_c = 3;

    function processar(num, callback)
    {
        callback(num);
    }

    function elevar_al_cuadrado(num)
    {
        console.log(`${num} al cuadrado es: ${num * num}`)
    }

    processar(num_c, elevar_al_cuadrado);


// Exercise 2 - Callbacks with Mathematical Operations:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 2 N★☆☆ | --------------------");
// Write a function called calculadora that accepts three parameters:
// two numbers and a callback function. The calculadora function should invoke the callback function with the
// two numbers as parameters. Then, call calculadora with a function that performs the addition of the two numbers.

    function calculadora (num1, num2, callback)
    {
        callback(num1, num2);
    }

    function sumar_numeros(num1, num2)
    {
        console.log(`Sumar ${num1} + ${num2} = ${num1 * num2}`);
    }

    calculadora(3, 4, sumar_numeros);


// Exercise 3 - Using Callbacks in Asynchronous Functions:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 3 N★★☆ | --------------------");
// Write a function called esperarISaludar
// that accepts two parameters: a name and a callback function. The function should wait for 2 seconds and
// then invoke the callback function, passing the name as a parameter.
console.log("Scroll down and wait 2000ms, result it will appear at the bottom");

    function esperarISaludar (name, callback)
    {
        callback(name);
    }

    function mensaje_delayed(name)
    {
        setTimeout(() => {
            console.log(`Delayed Hola ${name}!! | 1.3.3 | with 2000ms of delay`)
        },2000);
    }

    esperarISaludar("Miguel", mensaje_delayed);


// Exercise 4 - Callbacks with Arrays:
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 4 N★★☆ | --------------------");
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
console.log("\x1b[1m\x1b[32m--------------------- | 1.3 Ex 5 N★★★ | --------------------");
// a string and a callback function.
// The function processString should convert the string to uppercase and then invoke the callback
// function with the transformed string.

    let string = "Esto esta en minUsCuLas Y paSa A MaYuScULas";
    let result = "";
    function processString(str, callback)
    {
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
/****                               1.4                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.4                         ****\n*************************************************************\n");

// Exercise 1 - Spread Operator in Arrays:
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 1 N★☆☆ | --------------------");
// Create two arrays, array1 and array2. Use the spread operator
// to create a third array that contains all the elements from array1 and array2.

    let array_1 = [1,2,48,5,17,8,-23,4,74];
    let array_2 =  [66,23,-45,88,35,2,11];

    let array_combined = [...array_1, ...array_2];

    console.log(`El array 1 : ${array_1} combinado con ${array_2} resulta en ${array_combined}`);


// Exercise 2 - Rest Operator in Functions: 
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 2 N★☆☆ | --------------------");
// Create a function called sum that uses the rest operator to accept an indefinite
// number of arguments and return their sum.

    function sum(...nums) 
    {
        console.log(`rest op shows: ${nums}`);
    }

    sum(1,3,4,6,7,8,3);
    sum(-34,8,56);


// Exercise 3 - Copying Objects with Spread
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 3 N★★☆ | --------------------");
// Create an object 'object1'. Then create a second object, 'object2', that is a copy of 'object1' using the spread
// operator. Change a property in 'object2' and check that 'object1' has not changed.

    let object1 = {name: 'luis', height: 1.66}
    let object2 = {...object1, height: 2.70}

    console.log(object1);
    console.log(object2);


// Exercise 4 - Rest in Destructuring:
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 4 N★★☆ | --------------------");
// Create an array with several elements. Use destructuring and the rest operator to assign the first two elements
// to variables, and then assign the rest of the elements to a third variable.

    let array_3 = [1,-2,48,-5,"verde",8,-23,4];
    let [first, second, ...rest] = array_3;

    console.log(`First: ${first}`);
    console.log(`Second: ${second}`);
    console.log(`Third: ${rest}`);


// Exercise 5 - Spread in Functions
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 5 N★★★ | --------------------");
// Create a function that accepts three arguments. Then, create an array with three elements and call the
// function using the spread operator with this array.

    let values = ["hi", "there", "mate!"];
    function    printArray(a, b, c)
    {
        console.log(a, b, c);
    }

    printArray(...values);


// Exercise 6 - Merging Objects with Spread
console.log("\x1b[1m\x1b[32m--------------------- | 1.4 Ex 6 N★★★ | --------------------");
// Create two objects with different properties. Use the spread operator to merge these two objects into a new one.

    let obj1 = {name: "Luis", surname: "Prieto"};
    let obj2 = {age: 40, born: "León"};

    let obj12 = {...obj1, ...obj2};
    console.log(obj12);


/**************************************************************************/
/****                               1.5                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.5                         ****\n*************************************************************\n");

// Exercise 1 - Map
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 1 N★☆☆ | --------------------");
// You have an array of numbers [1, 2, 3, 4]. Create a new array that contains the square of each number.

    let given_array = [1, 2, 3, 4];
    let square_array = given_array.map(num => num ** 2);

    console.log(square_array);


// Exercise 2 - Filter
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 2 N★☆☆ | --------------------");
// You have an array of numbers [1, 2, 3, 4]. Create a new array that only contains even numbers.

    let num_arr = [1, 2, 3, 4];
    let even_nums = num_arr.filter(num => num % 2 === 0);
    let even_enum = num_arr.map(num => num % 2 === 0);

    console.log(even_enum);
    console.log(even_nums);


// Exercise 3 - Find
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 3 N★☆☆ | --------------------");
// You have an array of numbers [1, 10, 8, 11]. Use the find function to find the first number greater than 10.

    let arr_num = [1, 10, 8, 11];
    let num_ten_greater = arr_num.find(num => num > 10);

    console.log(num_ten_greater);


// Exercise 4 - Reduce
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 4 N★☆☆ | --------------------");
// You have an array of numbers [13, 7, 8, 21]. Use the reduce function to calculate the total sum of the numbers.

    let nu_array = [13, 7, 8, 21];
    let sum_num = nu_array.reduce((sum, num) => sum + num, 0);

    console.log(sum_num);


// Exercise 5
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 5 N★★☆ | --------------------");
// Given an array "[1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]", create a function in a single line that does the following:
// - Filters numbers greater than or equal to 10.
// - Multiplies each filtered number by 2.
// - Calculates the sum of the filtered and multiplied numbers.
// - The function should return the result of the sum.

    let arr_numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    let resultado = arr_numbers.filter(num => num >= 10).map(num => num * 2).reduce((sum, num) => sum + num, 0);

    console.log(resultado);


// Exercise 6 - Every / Some
console.log("\x1b[1m\x1b[32m--------------------- | 1.5 Ex 6 N★★★ | --------------------");
// Use every and some to determine if all or some of the elements in the array [11, 12, 13, 14] are greater than 10.

    let array_nums = [11, 12, 13, 14];
    let every_check = array_nums.every(num => num > 10);
    let some_check = array_nums.some(num => num > 10);

    console.log(every_check);
    console.log(some_check);


/**************************************************************************/
/****                               1.6                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.6                         ****\n*************************************************************\n");


// Exercise 1 - forEach
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 1 N★☆☆ | --------------------");
// You have an array of names. Use forEach to print each name to the console:

    let noms = ['Anna', 'Bernat', 'Clara'];

    noms.forEach(name => console.log(name));


// Exercise 2 - for-of
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 2 N★☆☆ | --------------------");
// You have an array of names. Use a for-of loop to print each name to the console:

    let noms2 = ['Anna', 'Bernat', 'Clara'];

    for (names of noms2)
    {
        console.log(names);
    }


// Exercise 3 - filter
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 3 N★☆☆ | --------------------");
// You have an array of numbers. Use filter to create a new array that only contains even numbers.

    let numeros = [1, 2, 3, 4, 5, 6];

    let evens = numeros.filter( num => num % 2 === 0);
    console.log(evens);


// Exercise 4 - for-in
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 4 N★★☆ | --------------------");
// You have an object with key-value pairs: let obj = { name: 'Ona', age: 25, city: 'Barcelona' };
// Use a for-in loop to print each key and its corresponding value.

    let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

    for (let key in obj)
    {
        console.log(`${key}: ${obj[key]}`);
    }


// Exercise 5 - for-of with break
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 5 N★★☆ | --------------------");
// You have an array of numbers. Use a for-of loop to print the numbers until you find the number 5, then stop the loop:

    let numeros_arr = [1, 2, 3, 4, 5, 6];

    for (let numero of numeros_arr)
    {
        if (numero === 5)
            break;
        console.log(numero);
    }


// Exercise 6 - for-of with index
console.log("\x1b[1m\x1b[32m--------------------- | 1.6 Ex 6 N★★★ | --------------------");
// Use a for-of loop to print each element in the array and its index:

    let arr_noms = ['Anna', 'Bernat', 'Clara'];

    for (let [index, nom] of arr_noms.entries())
    {
        console.log(`${index}: ${nom}`);
    }


/**************************************************************************/
/****                               1.7                                ****/
/**************************************************************************/
console.log("\x1b[1m\x1b[31m*************************************************************\n****                         1.7                         ****\n*************************************************************\n");

// Exercise 1 - Creating a Promise
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 1 N★☆☆ | --------------------");
// Create a promise that resolves after 2 seconds and returns the string 'Hello, world'.
    console.log(`Without output | 1.7.1 | > | 1.7.2 |`)

    let promise = new Promise(
        (result) => {
            setTimeout(() => result('Hola, món'), 2000);
        }
    )


// Exercise 2 - Using a Promise
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 2 N★☆☆ | --------------------");
// Use the promise created in the previous exercise. Create a .then that prints the result to the console.
    console.log(`Delayed output | 1.7.2 | 2000ms of delay`)

    promise.then(result => console.log(result));


// Exercise 3 - Promise with reject
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 3 N★☆☆ | --------------------");
// Create a promise that resolves after 2 seconds if the input is equal to 'Hola',
// and rejects if the input is anything else.
    console.log(`Delayed output | 1.7.3 | 2000ms of delay`)

    function rej_prom(input)
    {
        return new Promise
        (
            (resolve, reject) => {
                if (input === 'Hola')
                    setTimeout(() => resolve('Input is "Hola"'), 2000);
                else
                    reject('Input it is NOT "Hola"');
            }
        )
    }

    rej_prom('Hola')
        .then(result => console.log(result))
        .catch(reject => console.log(reject));


// Exercise 4 - Async/Await
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 4 N★☆☆ | --------------------");
// Write an asynchronous function that uses the await function to wait for the result of
// the promise created in exercise 1, and then prints that result to the console.

    console.log(`Delayed output | 1.7.4 | 2000ms of delay`)

    async function print_ex1()
    {
        try {
            let result = await promise;
            console.log(result);
        }
        catch (error) {
            console.log('Error');
        }
    }

    print_ex1();


// Exercise 5 - Error Handling with Async/Await
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 5 N★★☆ | --------------------");
// Modify the previous example to reject the promise immediately with 'Async Error' and handle the error using try/catch.

    console.log(`Delayed output | 1.7.5 | 2000ms of delay`)

    async function print_ex1()
    {
        try {
            let result = await promise;
            console.log(result);
        }
        catch (error) {
            console.log('Error');
        }
    }

    print_ex1();


// Exercise 6 - Promise.all: 
console.log("\x1b[1m\x1b[32m--------------------- | 1.7 Ex 6 N★★★ | --------------------");
// Create two promises that resolve after 2 and 3 seconds, respectively. Use Promise.all
// to wait for both promises to resolve, and print the results to the console.

    console.log(`Delayed output | 1.7.6 | 3000ms of delay`)

    let promise1 = new Promise((resolve) => {
        setTimeout(() => resolve('Promise 1 resolved after 2 secs'), 2000);
    })

    let promise2 = new Promise((resolve) => {
        setTimeout(() => resolve('Promise 2 resolved after 3 secs'), 3000);
    })

    Promise.all([promise1, promise2])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });

console.log("\x1b[1m\x1b[31m*************************************************************\n****                  DELAYED OUTPUTS                    ****\n*************************************************************\n");
