function SetUsername(username){
    this.username=username
    console.log("Called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("Chai","chai@gmail.com",12333);
console.log(chai);
