
let x = 10; // number
let y = "Hello"; // string
let z = true; // boolean
let a = null; // null
let b = undefined; // undefined

let c = Symbol("I am a symbol");
console.log(c);

let f = BigInt(100) + BigInt(200); // BigInt

let obj = {
    name:"Mehtab",
    roll : 20,
    age: 31,
    isMarried: false,
    hobbies: ["reading", "swimming", "travelling"]

}

// NN BB SS U 
console.log(x,y,z,a,b,f,obj);


console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof a);
console.log(typeof b);
console.log(typeof f);
console.log(typeof obj);



// Object in js are non primtive data type.
// Object is a collection of key-value pairs.
// In js, object is created using curly braces {}.
// Each key-value pair is separated by a comma.
// Key is a string and value can be any data type.
// Key-value pairs are enclosed in quotes.
// Key-value pairs are separated by a colon.
// Key-value pairs are separated by a comma.    

const person = {
    name :"mehtab",
    age:31,
    hobbies : ["watching movies","cooking"],
    address: "Hyderabad"
}
console.log("__________________________________");
console.log(person);

//access object properties using dot notation
console.log(person.name);
console.log(person.hobbies[1]);

//object is used to store key value pirs, so we can access the values using keys.

//we can also add new properties to the object using dot notation.
person.gender = "male";
console.log(person);

// we can alsoe delete properties from the object using delete keyword.
delete person.age;

console.log(person);

console.log(person["name"]); // accessing the value using key with bracket notation.
