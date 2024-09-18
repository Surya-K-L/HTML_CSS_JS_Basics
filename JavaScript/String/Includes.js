let str="The rain is too Heavy in Spain today";
// if the word includes then it will return the boolean value as true else false
let bool=str.includes("rain");
console.log(bool);

let bool1=str.includes("hello");
console.log(bool1);

//checks with index value also

let bool2=str.includes("rain",4);
console.log(bool2);