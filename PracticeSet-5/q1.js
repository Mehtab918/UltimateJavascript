//Practice :
// for a given  array of 5 students marks ,, find the avergae of all the marks and print it.

let student_marks = [80,56,93,78,65];

let sum =0 ;
let average =0;
 
 for(let i=0; i<student_marks.length;i++)
 {
    sum = sum + student_marks[i];

 }

 console.log(sum);
 average = sum/student_marks.length;
 console.log(`The  average of all the marks=${average}`);