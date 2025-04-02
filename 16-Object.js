const user = {} 

console.log(user);


const user1 ={
    key: "value"
}

console.log(user1);
console.table(user1);

const user2 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

console.log(user2);


const person ={
    name : "mehtab",
    age : 32,
    city : "Hyderabad",
    job : "form builder",
    salary : 50000
}

const person1 ={
    name : "mehtab",
    age : 32,
    city : "Hyderabad",
    job : "form builder",
    salary : 50000
}

console.table(person);

console.log(person);
console.log(person1);

console.log(person === person1); 


const  myName = "mehtab";

const  p1 = {}
const p2 = {}

// Will the address of p1 and p2 be the same?
console.log(p1 === p2);   // false 

const  str1 = '';
const  str2 = '';

// Will the address of str1 and str2 be the same?
console.log(str1 === str2); //true
// yes the address of str1 and str2 will be same - @77


// for every object in javascript , a unique address will generate.


// how to access object properties?

console.log(person.name);
console.log(person["age"]);
console.log(person['age']);

console.log(person.salary);

// how to add new values to an existing key in an object?
person.salary = 60000;

console.log(person.salary);

// how to add new key-value pairs to an object?

person.email = "mehtab@gmail.com";

console.table(person);