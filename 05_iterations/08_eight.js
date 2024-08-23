//Reduce function

let myNums=[1,2,3,4,5,6];
// let myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and ${currval}`);
    
//     return acc+currval;
// },0)
let myTotal=myNums.reduce((acc,currval)=>( acc+currval),0)
// let myTotal=myNums.reduce(function(acc,currval){
//     return acc+currval;
// })
console.log(myTotal);

let shoppingCarts=[
    {
        itemName:'Java',
        price:299
    },
    {
        itemName:'Python',
        price:399
    },
    {
        itemName:'Data Science',
        price:1099
    },
    {
        itemName:'Web Development',
        price:1199
    },
    {
        itemName:'JavaScripts',
        price:599
    },
    {
        itemName:'Ruby',
        price:499
    },
]

let totalPrice=shoppingCarts.reduce((acc,item)=>acc+item.price,0);
console.log(totalPrice);
