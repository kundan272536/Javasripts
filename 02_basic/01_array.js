//array
const myArr=[0,4,6,8,9,"Kundan"];
const myHeros=["Shaktiman","Kumar"];
const myArr2=new Array(1,2,3);
console.log(myArr[1]);


//Array Methods
myArr.push(9,8);

console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(10);//add at starting 
console.log(myArr);
myArr.shift()//Remove from starting
console.log(myArr);

console.log(myArr.includes(9));//find the given number in a array
console.log(myArr.indexOf(8));//fincd the index of given number
const newArr=myArr.join();//Bind the array and covert into array
console.log(newArr);

// Slice and splice

const myn1=myArr.slice(1,3);
console.log(myn1);

const myn2=myArr.splice(1,3);
console.log("Original array after slice",myArr);
console.log("Splice methods",myn2);






