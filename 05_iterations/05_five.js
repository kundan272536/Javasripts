const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function greeting(items){
//     console.log(items);
// })

// coding.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe);

coding.forEach((intem, index, arr) => {
  console.log(intem, index, arr);
});

const myCoding=[
    {
        languageName:"Javascripts",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"js"
    },
    {
        languageName:"Javascripts",
        languageFileName:"js"
    }
]
myCoding.forEach((item)=>{
   console.log(item.languageFileName);
   
})
