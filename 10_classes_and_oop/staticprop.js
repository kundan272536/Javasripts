class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){
        return `123`
    }
    //static keyword is used prevent from the all 
}
const kundan=new User("kundan");
// console.log(kundan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email
    }
}
const iphone=new Teacher("iphone",'kundanmnm@gmail.com')
iphone.logMe()