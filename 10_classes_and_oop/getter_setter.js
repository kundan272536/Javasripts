class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
      return `${this._password}kundan`
    }
    set password(value){
        this._password=value
    }
}
const kundan=new User("kundan123@gmail.com","123");
console.log(kundan.email);
