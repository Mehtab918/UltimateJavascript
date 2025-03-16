var x = 10;
var y = null;
var a = true;
var b = Symbol;
var c = undefined;


console.log(b);

{
    var x = 20;
    console.log(x);  // 20 
}

console.log(x); // 20 . 

// var keyword is global scope and not safe . it can be accessed from anywhere in the code .


let z="Mehtab";
{
    z ="John";
    console.log(z);  // john
}

console.log(z); // Mehtab



// const keyword is block scope and it can be accessed only inside the block it is defined .
const PI = 3.14;

console.log(PI); // 3.14

// PI = 3; // error . const keyword can not be reassigned .
// const keyword is used to define constants . it can not be reassigned .
     // PI =3; // thrown an error because PI is a constant .
      console.log(PI); // 3.14

    {
        const author ="Mehtab";
        console.log(author); // Mehtab

    }
    
   // console.log(author); // Mehtab . const keyword is local and block based scope . it can be accessed only inside the block it is defined .    


  //const keyword must be initialized with a value . if not initialized it will throw an error .

   // const name; 
  // Uncaught SyntaxError: Missing initializer in const declaration 


//   let author = "ankit";

//   author = "subhash";   // can be reassigned but not redeclared

//   let author = "manoj" // throws an error because author is already declared . It can not be redeclared .

  let g = 10;
  {
    let g= 100;
    console.log(a); // 100
  }

console.log(g); // 10 not 100 because let keyword is block scope.  whatever is defined inside the block is not accessible outside the block.
