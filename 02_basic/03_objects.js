//Singleton to control object creation, limiting the number to one but allowing the flexibility to create more objects if the situation changes. 
// Object.create


const mySym=Symbol("key1");
// Object literals
const JsUser={
    name:"Kundan",
    age:18,
    [mySym]:"mykey1",
    location:"Patna",
    email:"kundankumar252736@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"]
}
console.log("Dispalying by dot",JsUser.email);
console.log("Displaying by using",JsUser["name","email"]);
console.log("Displaying",JsUser[mySym]);

JsUser.email="chandankumar@gmail.com"
console.log("After change ",JsUser);
// Object.freeze(JsUser);
JsUser.email="chandankudffdsfdsmar@gmail.com"
console.log("After change ",JsUser);


JsUser.greeting=function(){
    console.log("hello sdfdsk");
    
}
console.log(JsUser.greeting());
 JsUser.greetingOne=function(){
    console.log(`Hello ${this.name}`);
    
 }
 console.log(JsUser.greetingOne());
