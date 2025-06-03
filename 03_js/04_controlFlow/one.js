// if-statement

// const isUserLoggedIn = true
// const temp=41
// if(temp<50)//condition using comparision operator
// {
//     console.log("less than 50");
//     //code
// }
// else
// {
// console.log("temp is greater than 50");
// }

//comparision operator
// <,>,<=,>=,==,===,!=,!==(strict equal)

const score = 200

if(score>100)
{
    const power = "fly"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);//out of scope 

const balance = 1000

//implicit code
// if(balance>500) console.log("test"),console.log("test2"); //bad practice

// if(balance < 500 ) {
//         console.log("less than 500");
// }
// else if(balance<750)
// {
//     console.log("less than 750");
// }
// else if(balance < 900)
// {
//     console.log("less than 900");
// }
// else
// {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard)
{
    console.log("Allow to buy cource");
}

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User logged in");
    
}