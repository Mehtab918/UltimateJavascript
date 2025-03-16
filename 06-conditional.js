//if statement

let age = "0";
console.log(typeof age);
age = Number.parseInt(age);
console.log(typeof age)
console.log("You are " + age + " years old.");

if(age>18)
{
    console.log("You are eligible to vote.");
}
else{
    console.log("you aren't eligible to vote.");
}