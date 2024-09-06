// let myName="kundan     "
// letmyNewName="Kumar    "
// console.log(myName.trueLength);



let myHeros=['thor','spiderman']
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.kundan=function(name){
    console.log(`Kundan is present in all objects`);
//   return name.trim().length();
}
// heroPower.kundan()

Array.prototype.heyKundan=function(){
    console.log('Kundan says Hello');
    
}
myHeros.kundan()
myHeros.heyKundan()

const User={
    name:"kundan",
    eamil:"kundankumar252736@gmail.com"
}
const Teacher={
    makeVideo:true,
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'Js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto_=User

//Modern Synatax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName="ChaiAurCode    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);  
}
anotherUserName.trueLength();
"kundan  ".trueLength();
"kumar     ".trueLength();