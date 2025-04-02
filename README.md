# Ultimate Javascript Course - CodeWithMehtab

# Variable
-------------------
What is the difference between `let`, `const`, and `var` in JavaScript?

    var keyword is used before ES6 to declare variables. It has function scope and global scope. It can be reassigned and redeclared.
    let keyword is used in ES6 to declare variables. It has block scope and local scope. It can be reassigned but not redeclared.
    const keyword is used in ES6 to declare constants. It has block scope and local scope. It cannot be reassigned or redeclared.

    In summary, var is a global scope, let is a block scope, and const is a block scope with constant value.

Javascript is a case sensitive language.
    // Mehtab and mehtab are two different variables.
    // Mehtab and mehtab are two different constants.


# Primitive Data Types and Objects
-------------------------------
7 datatypes in JavaScript: string, number, boolean, null, undefined, symbol, and object.

Objects are a collection of key-value pairs, where the keys are strings and the values can be any data type.

N = null
N = number
B = boolean
B = bigInt
S = symbol
S = string
U = undefined
O = object

In JavaScript, we can use the typeof operator to check the data type of a variable.


# Loops:

for loop
for in loop  - Advanced for loop [E6] 
for of loop  - Advanced for loop [ES6]
while loop
do while loop 

# Functions:

Function declaration  - Declaring a function using the function keyword.
Function expression  - Declaring a function using an anonymous function expression.
Arrow function -    Declaring a function using the arrow operator =>.

function name()
{
    // statements
}


# String 
String is a sequence of characters.

let str = "Hello World";
let str2 = "12345";

String methods : concat(), includes(), startWith(), endsWith(), indexOf(), lastIndexOf(),replace(), split(), substring(), trim(), toLowerCase(), toUpperCase(), charCodeAt(), etc,



# Array

Array is a collection of elements of any data type.

let arr = [1, 2, 3, 4, 5];
let heroes = ["Superman", "Batman", "Wonder Woman"];

Array methods : push(), pop(), shift(), unshift(), reverse(), sort(), splice(), join(), filter(), map(), forEach(), etc,

sort() method sorts the elements of an array in ascending or descending order. It takes a compare function as an argument. array.sort() will sort the array based on coverting the elements to strings. 

Higher order functions : map(), filter(), reduce(), etc,

reduce : 
- The reduce() method executes a reducer function for array element.

- The reduce() method returns a single value: the function's accumulated result.

- The reduce() method does not execute the function for empty array elements.

- The reduce() method does not change the original array.


# Advantages of using sseparate script tag using external JavaScript file( src attribute): 
- separation of concerns
- easy to debug
- Browser Caching.

2 ways of writing JavaScript code:
- Inline JavaScript
- External JavaScript file

# FIRST CLASS FUNCTION:
- A function is a first-class citizen in JavaScript.
<!-- first class functions -->
first class functions are the functions that can be :
- assigned to a variable
- returned by another function
- passed/assigned as a value to a variable , or object or array

# Object

Object is a collection of key-value pairs, where the keys are strings and the values can be any data type.

# console object 

- console.log(console); // returns the console object
- console.warn("This is a warning message"); // returns a warning message in the console.
- console.error("This is an error message"); // returns an error message when an error occurs.
- console.assert(55>67); //assertion failed. It will log the message in the console - "Assertion failed: 55 > 67"
- console.table(obj); // return a tabular representation of the object in index and value format.

# Window object 
    - The window object is supported by all browsers. It represents the browser's window.

    - All global JavaScript objects, functions, and variables automatically become members of the window object.

    - Global variables are properties of the window object.

    - Global functions are methods of the window object.

# Map

Map is a collection of key-value pairs, where the keys can be any data type and the values can be any data type.

# Set

Set is a collection of unique values of any data type.

# Classes

Classes are used to create objects with properties and methods.

# Modules

Modules are used to organize code into reusable pieces.

# Promises

Promises are used to handle asynchronous operations.

# Async/Await