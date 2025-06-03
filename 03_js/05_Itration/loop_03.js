const coding = ["js", "rb", "py", "java", "cpp"]


//call-Back function nu name na hoi
//foreach loop ma call-back function use thay
// coding.forEach( function (item){
//    console.log(item);

// })

//using arrow function
// coding.forEach((item)=> {
//     console.log(item);

// })

// function printMe(item)
// {
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})


//important
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach((item) => {
    console.log(item)
})


//for-each value return na kare
// const values = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter value return kare atle value joti hoi to filter use karvanu
const newNums = myNums.filter((num) => {
    return num > 4;
})
console.log(newNums);

const Nums = []
myNums.forEach((num)=>
{
    if(num>4)
    {
        Nums.push(num)
    }
})
console.log(Nums);



