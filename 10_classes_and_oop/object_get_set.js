const User={
    _email:"kudnan@gmail.com",
    _password:"abc",
    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);
