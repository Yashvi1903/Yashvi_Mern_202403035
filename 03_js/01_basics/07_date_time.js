//dates

let myDate = new Date()
console.log(typeof myDate)
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.getDate());
console.log(myDate.getTime());
console.log(myDate.getMonth()+1);
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getDay());//today=>tuesday

//let mycreatedDate = new Date(2023,0,23,5,3)//month start with 0 in js
//let mycreatedDate = new Date("2023-01-14")
let mycreatedDate = new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString())

let myTimeStamp = Date.now()//time in mili seconds

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))//time in second

myDate.toLocaleString('default',{weekday:"long"})