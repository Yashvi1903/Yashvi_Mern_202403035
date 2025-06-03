//Java-Script is dynamically typed language
// # primitive
// call by value (always copy ape)
// 7 types: String,Number,Boolean,null,undefined,Symbol(unique),BigInt

const score = 100
const isLoggedIn=false
const outsideTemp = null
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId);//false


//Non-primitive (Referance type)

//Array,Objects,Functions

const heros =["shaktiman","naagraj","doga"]
let myObj = {
    name:"yashvi",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

//============================================================================

// Stack(Primitive)=>copy, Heap(Non-Primitive)=>referance

let myYoutubename = "hiteshchaudry.com"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);

let user1 ={
    email: "user@goole.com",
    upi:"user@ybl",
}
let user2 = user1

user2.email = "yashvi@google.com"
console.log(user1);
console.log(user2);

