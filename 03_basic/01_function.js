function myName(){
    console.log("kundan");
    console.log("kumar");
    
}
myName();

function parameter(num1,num2){ //this is parameter
    return num1*num2;
}
// const result=parameter(6,8);//this is arguments
// console.log(parameter(7,8));
// console.log("Results",result);

function loginUser(username="Sam"){
    if(!username){
        console.log("Please enter Username");
        return
    }
    return `${username} just logged In`;
}
console.log(loginUser());
//Rest and spread operator both are used for concate the array when we pass in parameters in function with ...operator then call rest operator 
function calculateCartPrice(val1,val2,...num1){// rest operators 
  return num1;
}
console.log(calculateCartPrice(400,500,200,600,7000));

//Passing the objects in function 
 const newUser={
    name:"Kundan",
    email:"kundankumar252736@gmail.com",
    price:500
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and email is ${anyObject.email}`);
    
 }

//  handleObject(newUser);
//Passing direct objects in fucntion 
handleObject({
    name:"Kundan",
    email:"kundankumar252736@gmail.com",
    price:500
})

const myNewArray=[400,600,900,905];
function returnSecondValue(getArray){
 return getArray[1];
}
console.log(returnSecondValue(myNewArray));
