// First Way to Promise
const promisesOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,Cryptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
        // reject()
    },2000)
});
promisesOne.then(function(){
    console.log("Promised consumed");   
})


//Second Way
new Promise(function(res,rej){
    setTimeout(function(){
     console.log("Async Task2 is completed");
     res()
    },1000)
}).then(function(){
    console.log("Promised Consumed 2 is runnig");  
})



//Third Way

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({'userName':'Kundan','email':'kundankumar252736@gmail.com'});
    },1000)
})
promiseThree.then(function(data){
    console.log(data.userName);
    
})



//Four Way
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({'userName':'Kundan Kumar','email':'kundankumar252736@gmail.com'})
        }
        else{
            reject('Error:Something Went wrong');
        }
    },1000)
})

promiseFour.then((user)=>{
    return user.userName;
})
.then((userName)=>{
    console.log(userName);   
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>console.log("Either Promise is completed or Rejected"))



//Fifth Way

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({'userName':'JavaScripts','email':'kundankumar252736@gmail.com'})
        }
        else{
            reject('Error:Js Went wrong');
        }
    },1000)
})

async function ConsumePromiseFive(params) {
    try {
        const response=await promiseFive
       console.log("Response is here",response);
    } catch (error) {
        console.log(error);
        
    }
}
ConsumePromiseFive()

//Fetch

// async function getAllUsers(params) {
//     try {
//         const response=await fetch('https://api.github.com/users/kundan272536');
//         const data= await response.json();
//         console.log("Data",data);
        
//     } catch (error) {
//         console.log(err);
        
//     }
// }
// getAllUsers();


fetch('https://api.github.com/users/kundan272536')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log('Data is ',data);
    
})
.catch((error)=>{
    console.log("Error",error);
    
})