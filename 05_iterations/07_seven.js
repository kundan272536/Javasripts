//Map function

let myNums=[1,2,3,4,5,6,7,8,9];

// let newNums=myNums.map((num)=>num+10);
// console.log(newNums);

//Chaining
let newNums=myNums.map((num)=>num+10)
            .map((num)=>num+5)
            .filter((num)=>num>20)

console.log(newNums);
console.log(myNums);
