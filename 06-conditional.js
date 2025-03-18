//if statement

let age = "0";
console.log(typeof age);
age = Number.parseInt(age);
console.log(typeof age);
console.log("You are " + age + " years old.");

if (age > 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("you aren't eligible to vote.");
}

console.log("enter your age :");

let voterAge = 7;

if (voterAge < 10) {
  console.log("you are a kid and can't vote.");
} else if (voterAge < 18 && voterAge >= 10) {
  console.log("you are a kid so you wont vote before 18");
} else if (voterAge >= 18) {
  console.log("you are eligible to vote now");
} else {
  console.log("age is not valid");
}

console.log("Done");

// write a program to compare which is greater between two numbers using if else statement.

 let num1 = 20;
 let num2= 30;

 if(num1> num2)
 {
  console.log(num1 + " is greater than " + num2);
 }
 else if(num2> num1)
 {
  console.log(num2 + " is greater than " + num1);
 }
 else{
  console.log(num1 + " and " + num2 + " are equal");
 }


/*

if elese if else statement = if conndition is true then execute the if block statemnt , else if condition is true then execute the else if block
statement, else execute the else block statement ,If all the conditions are false then execute the else block same as if condition is false.
*/

// switch statement

let day = "Monday";

switch (day) {
  case "Monday": console.log("Monday is first day of the week."); break;
  case "Tuesday": console.log("Tuesday is second day of the week.");
  case "Wednesday":console.log("Wednesday is third day of the week.");
  case "Thursday": console.log("Thursday is fourth day of the week.");
  case "Friday": console.log("Friday is fifth day of the week.");
  case "Saturday": console.log("Saturday is sixth day of the week.");
  case "Sunday": console.log("Sunday is last day of the week.");
  default: console.log(`Sorry, we are out of ${day}.`);
    break;
}

// break statement is used to break out of the switch statement.


// ex- 2


let fruit ="sooya";

switch(fruit)
{
  case "apple" : console.log("apple is a fruit");
  break;
  case "banana" : console.log("banana is a fruit");
  break;
  case "orange" : console.log("orange is a fruit");
  break
  case "grape" : console.log("grape is a fruit");
  break;
  default: console.log("not a fruit");
}


// Ternary Operator 

let BuyerName ="John";

(BuyerName =! "Mehtab")? console.log("BuyerName is not Mehtab"): console.log("BuyerName is John");