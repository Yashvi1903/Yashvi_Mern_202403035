//recude mentod important

const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`);

//     return acc+currVal
// },0)//0 is initial value // we can take any value


const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        item: 'js',
        price: 2999
    },
    {
        item: 'py course',
        price: 999
    },
    {

        item: 'mobile dev',
        price: 12999
    },
    {
        item: 'web dev',
        price: 1999
    },
]

const total = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(total);
