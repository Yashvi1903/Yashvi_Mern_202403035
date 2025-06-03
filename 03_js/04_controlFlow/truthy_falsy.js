const userEmail = "ykp@google.com"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");

}

// !falsy values
// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN

// ~Truthy values
// "0", 'false' , " ", [](empty array) , {} , function(){}(empty function)

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");

}
//all this comparision are true
if (false == 0 && false == '' && 0 == '') {
    console.log("True");

}

// NULLISH COALESCING OPERATOR (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 // agar value null hoi to ?? pachi ni value assign kari do ya koi biji rite function execute kari lo 
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 //je first value madse aai lai laise 

console.log(val1);

//terniary Operator 

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




