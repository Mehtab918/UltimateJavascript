// for loop
//print n to n-1 using for loop
for(let i=0; i<10; i++)
{
    console.log(i);
}


// SUM OF N NUMBERS USING FOR LOOP

let sum =0 ;

let n= 4;
for(let i=0; i<n; i++)
{
    sum = sum + (i+1);
}
console.log("sum of the first " + " " +n +" " + "numbers is :"+ sum );


//for in 

const restaurant = {
    name:"Burger King",
    location:"New York",
    cuisine:"Burgers"
}

for (let key in restaurant)
{
    console.log(key + ":" + restaurant[key]);
}
//-----------------------------------------------------------
const fruits = {
jharkhand :"mango",
bihar :" ganna",
punjab :" lichi",
kerela : "guava"
}

for(let a in fruits)
{
    console.log( " fruits in " + a + " : " + fruits[a]);
}
//====================================================================
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"



//for of  - Receives a value from the sequence on each iteration.

let arr = [1,2,3,4,5];

for (let i of arr)
{
    console.log(i);
}

const  name = "abcdefgh";

for(let char of name)
{
    console.log(char);
}

const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


// while loop   - jab tk condition true rahega loop chalta rahega , jis time condition false hua tb while loop band hojayega.

let num = 10;
let i =0;
while(i<num)
{
    console.log(i);
    i++;
}

console.log("---------------------------");
/* do while loop - do while loop bhi ek variant hai while loop ka. Isme pehle do block ek baaar execute krega hi krega. fir while condition check krega
//Ab agar while coondition true hua toh do block execute krega or ye aisa hi repeact hoga . lekin agar while condition false hua toh loop chalna band 
hojayga. */

let num1 = 10;

let j= 0;

do{
    console.log(j);
    j++;
}while(j<num1);