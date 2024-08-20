//for 
for (let i = 0; i < 10; i++) {
    const element = i;
    
    if(element==5){
        console.log("number 5");
        break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    const element = i;
    
    if(element==5){
        console.log("number 5");
        continue;
    }
    console.log(i);
}

for (let i = 1; i <=10; i++) {
   for (let j = 1; j < 10; j++) {
   console.log(i+'*'+j+'='+i*j);   
   }    
}

const myArray=['a','b','c'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}