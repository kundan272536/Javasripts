const score=400
console.log(score);


const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));// Read about precision

const hundreds=1000000
console.log(hundreds.toLocaleString('en-In'));



//---------------------------------------------Maths-------------------------------------//

console.log(Math);
console.log("Abstract value:",Math.abs(-4));
console.log("Round Value:",Math.round(4.6));
console.log("Ceil value means bigger value",Math.ceil(4.1));
console.log("Floor value means smaller value",Math.floor(4.9));
console.log("Minimum value",Math.min(7,4,8,10));
console.log("Maximum value",Math.max(10,15,18,9));
console.log("Random Value",Math.random());// Creates value between 0 to 1
console.log("Random value greater than 0",(Math.random()*10+1));
console.log("Random value to avoid decimal value",(Math.floor((Math.random()*10)+1)));
const min=10;
const max=20;
console.log("Rnadom value between given range",Math.floor(Math.random()*(max-min+1))+min);







