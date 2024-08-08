// Primitive Data Types
// 7 types: String, Number, Boolean, null, undefined,symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(typeof anotherId);
console.log(id==anotherId);


// Array/ Object/ Function
 const heroe=['25','25',36];
 console.log(typeof heroe);

const myObj={
    name:"kundan",
    age:22,
}
console.log(typeof myObj);

 const myFunction=function(){
    console.log("hello world");
 }

 console.log(typeof myFunction);


//  *********************************//
// stack(primitive), heap(nonPrimitive)
// stack provides copy of memory byut heap provide reference of memory
let youtubeChannel="hiteshchaudhary"
let anotherName=youtubeChannel
anotherName="chaiaurcode"
console.log(youtubeChannel);
console.log(anotherName);

let userOne={
    name:"kundan",
    email:"kundankumar12@gmail.com"
}

let userTwo=userOne
userTwo.email="addsfsd@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);