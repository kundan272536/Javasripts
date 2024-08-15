const tinderUser=new Object(); //Singleton ojects

tinderUser.id="123abc";
tinderUser.name="Kundan";
tinderUser.email="kundankumar@gmail.com";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"somea@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kundan",
            lastname:"kumar",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3=Object.assign({},obj1,obj2);
const obj4={...obj1,...obj2}
console.log(obj4);

const user=[
    {
        name:"kundan",
        age:"24"
    },
    {
        email:"kundankumar252736@gmail.com",
    }
]

console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    courseName:"kundan",
    courseInstructor:"kundan kumar",
    coursePrice:"999"
}
const {courseName:name,courseInstructor:Instructor}=course;
console.log(name,Instructor);

