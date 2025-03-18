//write a function to find the mean of 5 numbers

function findMean(num1, num2, num3, num4, num5)
{
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log("Mean of 5 numbers are:" + findMean(10,20,30,40,50));

// using arrow 

console.log("------------------------");
const findMeanOfFive =(num1, num2, num3, num4, num5)=> {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log("Mean of 5 numbers are:" + findMeanOfFive(10,20,30,40,50));
