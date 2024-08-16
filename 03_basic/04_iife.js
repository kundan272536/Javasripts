//Immediately Invoked Function Expression

(function chai(){//Named IIFE which has given name
    console.log(`DB Connected`);
})();
//Semicolon is important for end of termination 
(function chai2(){
    console.log(`DB connected Two`);
    
})();
((name)=>{
    console.log(`DB connected Three ${name}`);
    
})('Kundan');