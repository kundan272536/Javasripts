var c=300;
if(true){
    let a=10;
    const b=20;
    var c=30;
}
console.log(c);
// const b1={
//     come:"on",
//     say:{
//         something:"tu kiska bachha hai ?"
//     }
// }
// const b2={...b1};
// b2.say.something="tu mela bachha hai";
// console.log(b1.say.something);
// console.log(b2.say.something);

function one(){
    console.log("inside the one");
    
    const username="kundan";
    function two(){
        const website="youtube.com"
        console.log(username);
        
    }
    two()
}
one()

function addOne(num1){
    return num1+1;
}
console.log(addOne(5));
// addTwo(5)//give error because storing in variable
const addTwo=function(num1){
    return num1+2
}
console.log(addTwo(5));

