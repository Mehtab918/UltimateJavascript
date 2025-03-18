// write a program in js to print marks of a student using for in loop

let marks ={
    ankit : 80,
    shuvam : 20,
    rajesh : 90,
    ravi : 70,
    sushant : 60
}

for(let student in marks )
{
   console.log(student + " : " + marks[student]);

}
