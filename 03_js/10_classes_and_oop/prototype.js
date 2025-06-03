// let myName = "yashvi     "

// console.log(myName.trim().length);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy poew is ${this.spiderman}`);
    }
}

Object.prototype.yashvi = function(){
    console.log(`yashvi is present in all objects`);
    
}
//user-defined prototype of object 
heroPower.yashvi();
myHeros.yashvi();

Array.prototype.heyYashvi = function(){
    console.log(`yashvi says hello`);
    
}
//array ma prototype add karvi to aai object ma na ave 

myHeros.heyYashvi();
// heroPower.heyYashvi(); //give error

// ************inheritance*****************

const User = {
    name: "chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //inherite teachingSupport property 
    __proto__: TeachingSupport //je new prototype teachingsupport ma banse Aai ama bhi avi jase (bane connect thai gaya in short)
}

Teacher.__proto__ = User

//Modern Syntex
//teachingSupport teacher ni badhi property access kari le 
Object.setPrototypeOf(TeachingSupport,Teacher)