//for of


const  arr=[1,2,3,4,5];
//for of loop
// for (const num of arr) {
//     console.log(num);
    
// }
const greetings="Hello world";
for (const greet of greetings) {
    // console.log(greet);
    
}
const map=new Map();
map.set('IN','India')
map.set('USA','United State of America')
map.set('Fr','France')
map.set('In','India')
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,':-',value);
    
}


const myOjects={
    'game1':'NFS',
    'game2':'spiderman'
}
for (const [key,value] of myOjects) {
    console.log(key,value);//Its not work on objects
    
}