//singleton (constructor thi object banavi to singleton object bane)
//Object.create


//object using literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Yashvi",
    "full name":"yashvi patel",//no chance of access through "." you have to use [] notation to access
    [mySym]: "mykey1",//datatype is not consider as symbol
    age: 19,
    location: "ahmedabad",
    email: "yashvi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//note
// console.log(JsUser[mySym]);

/*symbol=>[] for using as a key */

//change value of object
JsUser.email = "ykp@daiict.ac.in"
//Object.freeze(JsUser) //not allow any changes after this
//console.log(JsUser);

JsUser.greeting = function(){
    //console.log("Hello JS-user")
}

JsUser.greeting2 = function(){
    //console.log(`Hello JS-user, ${this.name}`);
}

// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())


// *********************************object using constructor******************************

const tinderuser = new Object()
tinderuser.id = "13wcxzdx"
tinderuser.name = "Yashvi"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularUser = {
    email: "ykp@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yashvi",
            lastname: " patel",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


// !full name exist na kare to? (ana mate alag syntex use karisu)
//console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    3:"d",
    4:"e",
}
//const obj3 = {obj1,obj2} // ?object ni andar object banse objects combine nai thay

/*const obj3 = Object.assign(obj1,obj2)
console.log(obj3)
console.log(obj1); //obj1 ma bhi chages thai gaya */


// !most preferable
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)
//console.log(obj1)//obj1 ma changes nai thay


const obj4 = {...obj1,...obj2}//spread method
//console.log(obj4)

//console.log(tinderuser);

// console.log(Object.keys(tinderuser)); //return array
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); //array ni andar array madse

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))//check key present or not

//destructoring of objets 

const course = {
    coursename: "js in hindi",
    price: "999",
    courceInstructor: "hitesh"
}

const {courceInstructor: instructor} = course
console.log(instructor);//output-hitesh


//json-structure 
// {
//     "name": "yashvi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

