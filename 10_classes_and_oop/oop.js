// Objects Literal
const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user details form the database");
        console.log(`UserName: ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


function User(userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}

// const userOne=  User("Kundan",12,true)//When we not use new keyboard then value will be overwrite
// const userTwo=  User("Chandan",45,false)
const userTwo= new User("Chandan",45,false)
const userOne= new User("Kundan",12,true)

console.log(userOne.constructor);

