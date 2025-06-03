const user = {
    username: "yashvi",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to website`);//this=>refere to current context
        console.log(this);
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


//node environment ma current context empty hase atle Aa "empty object" apse
console.log(this);
// &brouser ni andar console.log(this) karvi to "window object" ape


// function chai()
// {
//     let username="yashvi";
//     console.log(this.username); //give error function ni andar this kam na kare object ni andar ajj kare
// }
// chai()


//  const chai = function()
//  {
//      let username ="yashvi"
//      console.log(this.username);
//  }

//Arrow function
// 

// koi bhi function ma this use na thay object maj thay

// *arrow function

// const addtwo = (num1,num2) =>{
//     return num1+num2
// }

// implecit return
//const addtwo = (num1,num2) => num1+num2
//const addtwo = (num1,num2) => (num1+num2)

//parentheses object return karva mate use thay
const addtwo = (num1,num2) => ({username: "yashvi"})

console.log(addtwo(3,4))

