let fullName="Mehtab";
console.log(fullName);


console.log(fullName.length);


//string can be written using single  

let firstName='John';
console.log(firstName);

console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);
console.log(firstName[3]);


// bactics of string  - String Interpolation  - Template literals 

let boy1 ="anuj";
let boy2 ="Raj";

//let sentence =" boy1 is a good friend of boy2";

//console.log(sentence); `boy1 is a good friend of boy2`

let sentence = `${boy1} is a good friend of ${boy2}`;

console.log(sentence);


// String interpolation is a feature of Modern Javascript which allows us to embed variables into strings using backticks ` ` instead of quotes " ".

// we will use template literals to create a string with variables.

// use  `${}` to embed variables in a string.



// String decalaration using double and single quotes

let game1 ="Cricket";
let game2 = 'Cricket';

console.log(game1);
console.log(game2);


// Quotes inside Quotes 

let quote1 = "My name is 'Mehtab'";
let quote2 = 'My name is "Mehtab"';

console.log(quote1);
console.log(quote2);


// we can use backticks ` ` to embed quotes inside quotes.

let quote3 = `My name is "Mehtab"`;

console.log(quote3);


//Escape Sequences 

let str1 = " I AM A STUDENT FROM \"INDIA\" ";

console.log(str1);

// NEW LINE 

let str2 = "Hello\nWorld";

console.log(str2);

// TAB 

let str3 = "Hello\tWorld";

console.log(str3);

// BACKSLASH 

let str4 = "Hello\\World";

console.log(str4);
 


//String as a object 
// we can create a string using new operator

let person = "Ankit";  // String literals 

console.log(typeof person); // string 

let person1 = new String("Ankit");   // String using new operator 
console.log(typeof person1);   // object 

console.log(person == person1); //true
console.log(typeof person === typeof person1); // false  // String and Object are different data types , thats why they are not equal.

 