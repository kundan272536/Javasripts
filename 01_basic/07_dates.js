//Date
let myDate=new Date()
console.log("Date ",myDate.toString());
console.log("Date ",myDate.toLocaleDateString());
console.log("Date ",myDate.toDateString());

const myCreatedDate=new Date(2023,0,23);
console.log("Created Date",myCreatedDate.toDateString());

const myCreateDate=new Date(2023,0,23,5,3);
console.log("Created Date with time",myCreateDate.toLocaleString());

const createDate=new Date("01-14-2024");
console.log("Created Date Format",createDate.toLocaleString());

const myTimeStamp=Date.now();
console.log("Time stamp",myTimeStamp);
console.log("Time Stamps",createDate.getTime());


console.log(Math.floor(Date.now()/1000));//For get date in seconds without decimals


let newDate=new Date();
console.log("Date",newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})

