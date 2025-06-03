const score = 400
//console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.65478

// console.log(otherNumber.toPrecision(3));//returns a string
// console.log(otherNumber.toPrecision(1))//presision + exponential

const hundreds = 1000000000
//console.log(hundreds.toLocaleString('en-IN'));//us standards

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //it is an object which have various methods

console.log(Math.abs(-1003));
console.log(Math.round(4.6));//round-off
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//majorly used
console.log(Math.floor(Math.random()*10) + 1);//min=>1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)

