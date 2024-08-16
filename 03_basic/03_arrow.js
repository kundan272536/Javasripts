const user={
    userName:"Kundan",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to websites`);
        console.log("this context",this);
        
    }
}
// user.welcomeMessage();
// user.userName="sam";
// user.welcomeMessage();
// console.log(this);// gives empty objects {}

function chai(){
    let name="Kundan";
    console.log(this);
    console.log(this.name); //this keyword we can`t use it gives undefined output it work with objects
}
chai();


//Arrow function
const chai2=()=>{
    console.log(this);   //Not gives any outputs
}
chai2();

const arrow1=(num1,num2)=>{
    return num1+num2;//Explicite Return
}
console.log(arrow1(8,9));

const arrow2=(num1,num2)=>num1*num2;//Implicite Return also use in this way const arrow2=(num1,num2)=>(num1*num2)
const arrow3=(num1,num2)=>({name:"kundan"});
console.log(arrow2(9,8));
console.log(arrow3());



