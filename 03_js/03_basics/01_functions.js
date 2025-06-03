function sayMyName()
{
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("V");
    console.log("I");
}

sayMyName //referance //needed in react
//sayMyName() //execution


// *function without any return value
// function addTwoNumbers(number1,number2)
// {
//    console.log(number1+number2)
// };

//addTwoNumbers(3,4)
//handle this conditions 
//addTwoNumbers(3,"a")//3a consider as a string

// *function with return value
function addTwoNumbers(number1,number2)
{
    // let result = number1+number2
    // return result

    return number1+number2
};
const result = addTwoNumbers(3,5)

//console.log("result: " + result)


function loginUserMessage(username)//we also able to assign default value like (username="sam")
{
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("YASHVI"))
//console.log(loginUserMessage())//if value not passed then undefined show

function calculateCartPrice(...num1)//... are rest/spread operator
{
    return num1
}

//console.log(calculateCartPrice(200,400,500,100));

const user = {
    username: "Yashvi",
    price: 199
}

function handleObject(anyuser)
{
    console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`);
}


handleObject(user)

//here type-safety needed in accessing user as parameter in function
//problems in accessoing exact key

// const user2 = {
//     username: "Yashvi-2",
//     prices: 199
// }

// function handleObject(anyuser)
// {
//     console.log(`Username is ${anyuser.username} and price is ${anyuser.price}`);
// }

// handleObject(user2)

const myNewArray = [200,300,500,700]

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,400,500,100,20]));