77;
"Mehtab khan";
true

// above code is perfect javascript code and it will run without any error.

let a = 10;
let b= 4;
let c = a + b;
let d = a-b;
let e = a* b;
let f = a/b;
let g = a %b;

console.log("Arithmetic Operators in Javascript:");
console.log("a  +  b = " ,c); // Output: 14
console.log("a  -  b = " ,d); // Output: 6
console.log("a * b =  ",e ); // Output: 40
console.log("a /b =" , f);
 console.log("a % b =" ,g);

 console.log("a++ =" ,a++);
 console.log(a);
 console.log("++a = " ,++a);
 console.log(a);

 console.log("a-- =" ,a--); //12
 console.log(a); //11
 console.log("--a =" ,--a); //10
 console.log(a);//10

 
 console.log("Assignment Operators in Javascript:")

  let x = 10;
  let y = x+6;

  x += 6;  //x = x+6;
  x -= 4; // x = x-4
  x*= 2; // x = x* 2; = 24
  x/=2;  // x=x/2;  12
  x%=3;  // x=x%3 ; 12/3= rem=0

  console.log(x); // Output: 10%3 =1
 console.log(y); // Output: 10

 console.log(x**y); //exponential operator    0 exponent 16 = 0;

 let z= 3;
 let w = 5;
 console.log(z ** w);

 let ab = 10;
 let cd = 10.0;


 console.log("Comparison Operators in Javascript:");

 console.log(ab == cd); // Output: true // only compare values not the type of values.
 console.log(ab===cd); // true // compare both values are of same type => 10 is number and 10.0 is also a floating number . so both said to be equal.
 
 let ef = "10";
 let gh = 10;

 console.log(ef == gh); // Output: true // both are string so it will return true.
 console.log( ef === gh) ; false // both are different type of values so it will return false. one is string and other is number.


console.log("less than");
console.log(ab >cd);
console.log( 10>6);
console.log(3==3);

const person = {
    name : "Mehtab",
    age : 31,
    job:"Software Engineer",
    city: "Hyderabad"
}

console.log(person.name == person.city);
let m = 1101;
let n = 1100;

console.log( m != n);
console.log(m==n); //false; // values are not same.
console.log(m===n);//false  // types and value both are not same.

console.log(null == undefined); 
console.log(null === undefined);


console.log("Logical Operators in Javascript:")

 let p = true;
 let q = false;
 console.log(p && q); // Output: false // both are false so it will return false.
 console.log(p || q); // Output: true // one is true so it will return true.
 console.log(!p); // Output: false // it will return false.
 console.log(!q); // Output: true // it will return true.


 let r = 402;
 let s = 204;

 console.log(r>s && r==s);// false 

 console.log(r>s || r==s);// true

 console.log(r>s && r!=s);// true

 