

const myArr = [0, 1, 2, 3, 4, 5]
//JS array are resizable with mix data-type
// Array Create shallow copies
//shallow copy:- same referance point

const myHeros = ["spiderMan","Thor"]

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) push starting
// myArr.shift() pop starting

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() //convert it into string

console.log(myArr);
console.log(typeof newArr)
console.log(newArr)

//slice vs splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) //slice not include last element of range

console.log(myn1);
console.log("B",myArr);//no change in original array

const myn2 = myArr.splice(1,3)//splice include last element of range

console.log(myn2);
console.log("B",myArr);//remove ranged element from splice

const marvel_heroes = ["thor", "Ironman" , "spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//array ni andar array banse

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);
//return new array by combining both


//spread operator same used for concat two or more arrays
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.from("yashvi"))
console.log(Array.from({name: "yashvi "}))//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))