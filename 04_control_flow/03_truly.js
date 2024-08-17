//Falsy values
// false,0,-0,BigInt,0n,"",null,undefined,NaN//all falsy value


// Truthy Value
//"0","false"," ",[],{},fucntion(){}

const userEmail=[];
if(userEmail.length===0){
    console.log("Array is Empty");
    
}

const emptyObj={}
if(Object.keys.apply(emptyObj).length===0){
    console.log("Onject is empty");
    
}

//Nullish Calescing Operator (??):null undefined

let val1;
val1=5 ?? 100;
val1=10 ?? null
val1=undefined ?? 50;
val1=null ?? 10 ?? 20;
console.log(val1);

// Terniary operator
// condition ? true :false
const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less than 80") :console.log("more tahn 80");
;
