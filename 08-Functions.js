
// console.log("M");
// console.log("E");
// console.log("H");
// console.log("T");
// console.log("A");
// console.log("B");


// function defintion - function is a keyword in JavaScript that allows you to create a new block of code that can be called from other parts of your code.
function myName()   
{
    console.log("M");
    console.log("E");
    console.log("H");
    console.log("T");
    console.log("A");
    console.log("B");
}

myName();  // caling the function 

// function with parameters

function greet(name)
{
    console.log("Hello: " + name)
}

greet("Mehtab"); // ? Hello : Mehtab

// function with return value 

// Adding two numbers and returning the result 

function addNumbers(num1, num2)
{
console.log("The sum of two numbers is :" + (num1 + num2 ));   // this line will print the sum of two numbers

}

//  line 42 to 47 will not execute because the function does not return anything.
addNumbers(5,10);// 15
addNumbers(5,"10"); // 510
addNumbers("5","10");//510
addNumbers(); // NaN (Not a Number)
addNumbers(5,null);// 5 (because null is converted to 0)    

// storing in a variable 
let result = addNumbers(5,10);
console.log(result); //undefined (because the function does not return anything)

// Returning a value from a function 
function addNumbers(num1, num2)
{
return "The sum of two numbers is :" + (num1 + num2 );   // this line will print the sum of two numbers

}

let result1 = addNumbers(5,10);
console.log(result1); 

let result2 = addNumbers(10,20);
console.log(result2);


//Ex - login User 
// `` string interpolation is a technique in js to embed variables in a string.
function loginUser(username)
{
    return `${username}` + " just logged in."; 
}
loginUser("Mehtab");  // not print 

let login = loginUser("Mehtab");
console.log(login); // {username}Mehtab


//let say user didnot given any input - then it will return undefined.

function loginUser(username)
{
    return `${username}` + " just logged in."; 
}
loginUser();  // not print 

let login1 = loginUser();
console.log(login1); // undefined just logged in.

// To avoid this

function loginUser(username)
{
    if(username === undefined)
    {
        return "Please provide username."
    }
    else
    return `${username}` + " just logged in."; }

console.log(loginUser());





//average of two numbers

function average(num1, num2)
{
    return (num1 + num2) / 2;
}

console.log(average(5,10)); // 7.5
console.log(average(10,20)); // 15
console.log(average(0,0)); // 0
console.log(average()); // NaN (Not a Number)



