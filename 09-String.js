//STRING IS AN IMMUTABLE DATA TYPE IN JAVASCRIPT.


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



//String Methods 

//length property - returns the number of characters in the string.
let str ="Hello World";

console.log(str.length); //count the number of characters in the string . 11


//lower case and upper case methods - returns the string in lower or upper case.
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//indexOf() method

console.log(str.indexOf("W"));

let firstOccurance= "Exercise is a good way to relax and good sleep";

console.log("firstOccurance of good:" + firstOccurance.indexOf("good"));

let lastOccurance= "Exercise is a good way to relax and good sleep";

console.log("last occurance of good:" +lastOccurance.indexOf("good",firstOccurance+1));


 let newString = str.substring(0,5); // Hello

console.log(newString);

let countIndex = str.lastIndexOf("l");

console.log(countIndex);

let trimString = "       Beautiful   places     ";

console.log(trimString.trim());

let sliceString = "Beautiful";

console.log(sliceString.slice(0,5)); // Beaut - 0-1-2-3-4


let charAt = newString.charAt(0); // index 0 is H

console.log(charAt); // H

//or 

console.log(newString[0]);  // retrieving  the character from the String.

//To retrieve the last character of any string, 
let lastChar = newString.charAt(newString.length-1); // H E L L O   (5-1) = 4 , charAt(4) = O , index starts from 0.  count starts from 1. 

console.log(lastChar);


//includes() method = checks if the string contains the specified string.

let includesString = "Hello World";

if( includesString.includes("World")){

    console.log("World is present in the string");

}
else{
    console.log("World is not present in the string");
}


//startsWith() method = checks if the string starts with the specified string.

let startString = "Hello World";

if(startString.startsWith("Hello"))
{
    console.log("The string starts with Hello");
}
else{
    console.log("The string does not start with Hello");
}


//replace() method - replace a substring with another substring. 
let replaceString = "Hello World";

newReplaceString = replaceString.replace("World","India");

console.log(newReplaceString); // Hello India


//split() method 

let splitString = "Hello,World";
    let splitArray = splitString.split(",");    // split kr dega or ek Array mai convert krdega

    console.log(splitArray);

//endsWith() method = checks if the string ends with the specified string.

let endsWithString = "Hello World";

if(endsWithString.endsWith("World"))
{
    console.log("The string ends with World");
}
else{
    console.log("The string does not ends with World");
}

let splitString1 =" Quick Little Brown Fox Jumps Over The Lazy Dog.";

let splitWord = splitString1.split(" ");

console.log("split word:" + splitWord); // ["Quick", "Brown", "Fox", "Jumps", "Over", "The", "Lazy", "Dog"]

console.log(typeof splitWord); //object

let splitResult =splitWord[3];

console.log(splitResult);

//concat() methods 

    let concatString = "Hello";
    let concatString1 = " World";    
    console.log("String concatenation: " +  concatString.concat(concatString1));



    // length() with escape sequences   - escape sequences will be count as  1 CHARACTER.

    let escapeString1 = "Hello\n";

    console.log("Escape sequence length: " + escapeString1.length);//6 

    let escapeString2 = "Hello\tWorld";
    console.log("Escape sequence length: " + escapeString2.length);//11


    let escapeString3 = "Hello\rWorld";
    console.log("Escape sequence length: " + escapeString3.length);//11

    let escapeString4 = "Hello\"World";
    console.log("Escape sequence length: " + escapeString4.length);//11

    console.log("----------------");

    //tricky question

    console.log(+true);  //1 
    console.log(+false);   //0
    console.log(+null);   //0
    console.log(+undefined);  //NaN
    console.log(+123); //123
    console.log(+0);  // 0
    console.log(+"");  //0
    console.log("----------------");
    console.log(+"Hello");   //
    console.log(+"123");
    console.log(+"123.456");
    console.log(+"NaN");


    // slice
    let  sliceString1 ="Mehtab Khan";

    console.log(sliceString1.slice(0,4)); // Meht

    console.log(sliceString1.slice(4)); // ab khan

    console.log(sliceString1.slice(4,0));  // In JavaScript, the .slice(start, end) method extracts a section of a string from start index to end index (excluding end). 
    // If start is greater than end, the result will be an empty string.

    //  M  e  h  t  a  b     K  h  a  n
    //  0  1  2  3  4  5  6  7  8  9 10

    //.slice(4, 0) means trying to extract characters from index 4 to index 0, but since the start index (4) is greater than the end index (0), no characters are extracted.


    

    // USE A FORLOOP TO PRINT A STRING CHARACTER BY CHARACTER

    let stringtoPrint ="OnePlus 7 Pro";

    let lengthOfString = stringtoPrint.length;

    console.log(lengthOfString);

    for(let i=0; i<lengthOfString;i++)
    {
        console.log(stringtoPrint[i]);
    }
// String are immutable in javascript , once a string is created it cannot be changed. we cannot add or remove characters from a string.

    let str5 ="Javascript is awesome."

    let str6 ="Yes,";

    let result = str6.concat(str5);  

    console.log(result); // Yes,Javascript is awesome.  // a new result object is created but str6 is not changed.

    console.log(str6); // Yes,