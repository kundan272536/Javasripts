class User{
    constructor (username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
    
}

const chai= new Teacher("Chai","kundankumar25@gmail.com");
chai.addCourse();
chai.logMe();

const masalChai=new User("Masala chai",'kundan@gmail.com')
masalChai.logMe();
console.log(chai instanceof Teacher);
