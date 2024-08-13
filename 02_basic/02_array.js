const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
// marvel_heros.push(dc_heros);
console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const newArr=marvel_heros.concat(dc_heros);
// console.log(newArr);
const newSpreadOperator=[...marvel_heros,...dc_heros];
console.log("Using Spread Operators",newSpreadOperator);

const another_array=[1,2,3,[4,5],8,9,[7,8,[4,8]]];
const another_flat_array=another_array.flat(Infinity);
console.log("Flat array",another_flat_array);


console.log("Checking it is array or not",Array.isArray("Kundan"));
console.log("COnverting into array",Array.from("Kundan"));
console.log("converting into array by using objects",Array.from({name:"kundan"}));

let score1=100;
let score2=200;
let score3=400;
console.log("converting into array",Array.of(score1,score2,score3));



