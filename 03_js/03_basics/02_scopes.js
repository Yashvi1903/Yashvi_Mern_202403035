//globle scope
// let a = 10
// const b = 20
// var c = 30 //block scope ane globle scope ma badhe access thai jay

let a = 300
if (true) {
    //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("inner: "+a)

}

console.log(a);
//console.log(b);
console.log(c); //this is wrong 


function one()
{
    const username ="yashvi"
    function two()
    {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) website scope ni bar access na thay
    two()
}
one()

if(true)
{
    const username ="yashvi";
    if(username === "yashvi")
    {
        const website = " patel"
        console.log(username+website)
    }
    //console.log(website); outside scope
}
//console.log(username) outside scope

//globle scope of browser and globle scope of our programme are also different

// ++++++++++++++++++++++++++intresting+++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num)
{
    return num+1
}


//this is an expression

//addtwo(5); can't execute before declaration
const addtwo = function(num)
{
    return num+2
}


