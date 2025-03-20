// Static methods
//--------------------------------------
 
// Array.from()
// ---------------------------
// ek String to Array conversion


const arr = "hello";

let newArr =Array.from(arr); // ["h", "e", "l", "l", "o"]
console.log(newArr);

// ek Array to String conversion
let num =  "12345";
let newArr1=Array.from(num);
console.log(newArr1);

const arr1 = [1,2,3,4,5];

const newArr2 = Array.from(arr1, function map(a,b)
{
    return a*2;
})
console.log(newArr2);


// given array is []
const arr3 = []

let newArr3 = Array.from({length:5});

console.log(newArr3.length);  // now the length of newArr3 is 5.

console.log(Array.from("foo")); // output: Array ["f", "o", "o"]


// Array.isArray()  tells whether an object is an array or not. returns true or false.

console.log(Array.isArray(arr3));

const unknownArr = "[]";

console.log(Array.isArray(unknownArr)); // false

console.log(Array.isArray([2,3,4,5])) // true

console.log("Array available :"+ Array.isArray([1,2,3],[1,23,4]));


// HIGHER ORDER FUNCTIONS 

// map()  = ek naya array create krta hai .
// - first parameter is a function that takes each element of the array as an argument.
// second parameter is optional but it return an index of the element.
// third parameter is optional but it return the original array.

let a = [1,2,3,4,5];

let a1 = a.map((value,index,array) => { console.log(value*2 , index ,array)});

console.log(a1); 


//filter() = ek naya array create krta hai .
// - first parameter is a function that takes each element of the array as an argument.
// second parameter is optional but it return an index of the element.  

const myNums = [1,2,3,4,5,6,7,8,9,10];

let a2 = myNums.filter((nums) => nums % 2 ===0)
console.log(a2);

let a3  = myNums.filter(( nums) =>  nums>5 && nums<10);
console.log(a3);

let a4 = myNums.filter((nums) => {

    return nums*2; //  [2,4,6,8,10,12,14,16,18,20]
});

console.log(a4); // [] 
//this will give EMPTY ARRAY as a value because we are not returning anything in the filter function. if we use open close curly braces we need to use return keyword.