const fname="Kundan"
const lname="Kumar"

console.log(`my name is first name is ${fname} and last name is  ${lname}`);
const gameName=new String("My-Name-Is-Kundan-Kumar");
// console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
const newString=gameName.substring(0,4);
console.log("substring methods",newString);
const anotherString=gameName.slice(-8,4);
console.log("slice methods",anotherString);
const trimMethod="   kundan   ";
console.log("trim_method",trimMethod.trim());
const url="https://kundankumar.com/kundan%20kumar";
console.log("replace method",url.replace('%20','-'));
console.log("Include Methods",url.includes('kundan'));
console.log("Split Method",gameName.split('-'));




