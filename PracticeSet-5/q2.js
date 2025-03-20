// practice 2 : 

 // for a given array with prices of 5 items [210, 300, 400, 500, 600]. 
// All iterms have an offer of 10% off. change the array after applying the offer.


let item_prices = [210, 300, 400, 500, 600];

let new_prices = [];
for(let i=0; i<item_prices.length;i++)
{
    new_prices[i] = item_prices[i] - item_prices[i]* 0.1;
}
console.log(new_prices); // [ 189, 270, 360, 450, 540 ]
