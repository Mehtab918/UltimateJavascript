//var is used in pre-ES6. Thumb rule ->we should avoid it.
// It will cause to create a bug.
console.log("Javascript tutorial-1 - var let const Example")
let a = 9;
let b = 10;
let c = "Mehtab";
//reassign is possible but re declare is not possible
// let c = sonam; ERROR
c ="sonam";
let d = null;
const author = "Mehtab";
//author = Feroz; ERROR
//const is neither be created nor being redeclared.
console.log(a);
console.log(c);
// use let, const identifier
//var is a global scope
{
  //let is a block scope.
 let c = "Feroz";
  console.log(c)
}
console.log(c);
console.log(author);

// Javascript is a case sensitive language.
    // Mehtab and mehtab are two different variables.
    // Mehtab and mehtab are two different constants.
    

    /* Interview Question: What is the output of the following code?
    ```javascript
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
    ```
    Answer: The output will be 30.

    What is the difference between `let`, `const`, and `var` in JavaScript?

    var keyword is used before ES6 to declare variables. It has function scope and global scope. It can be reassigned and redeclared.
    let keyword is used in ES6 to declare variables. It has block scope and local scope. It can be reassigned but not redeclared.
    const keyword is used in ES6 to declare constants. It has block scope and local scope. It cannot be reassigned or redeclared.

    In summary, var is a global scope, let is a block scope, and const is a block scope with constant value.

    */