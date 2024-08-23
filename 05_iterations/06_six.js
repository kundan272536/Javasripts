// const coding=['js','ruby','java','cpp','python']

// const value=coding.forEach((item)=>{
//     return(item); //returns undefined
// })
// console.log(value);

const myNums=[1,2,3,4,5,6,7,8,9];

// const newNum=myNums.filter((num)=>(num>5));//Return the numbers 
// console.log(newNum);


// const newNum=myNums.filter((item)=>{
//     return item>2;
// })
// console.log(newNum);

// const newNum=[];
// myNums.forEach((item)=>{
//     if(item>6){
//         newNum.push(item);
//     }
// })
// console.log(newNum);



const books=[
    {
        title:'Book One',
        genre:'fiction',
        publish:1981,
        edition:2004
    },
    {
        title:'Book Two',
        genre:'science',
        publish:1982,
        edition:2006
    },
    {
        title:'Book Two',
        genre:'science',
        publish:1982,
        edition:2006
    },
    {
        title:'Book Two',
        genre:'science',
        publish:1982,
        edition:2006
    },
    {
        title:'Book Three',
        genre:'hindi',
        publish:1989,
        edition:2089
    },
    {
        title:'Book Four',
        genre:'math',
        publish:1971,
        edition:2009
    },
    {
        title:'Book Five',
        genre:'physic',
        publish:1989,
        edition:2006
    },
]

let bookDetails=books.filter((bk)=>{
   return bk.genre==='science'
});

bookDetails=books.filter((bk)=>{
    return bk.edition>=200 && bk.genre==='science';
})
console.log(bookDetails);
