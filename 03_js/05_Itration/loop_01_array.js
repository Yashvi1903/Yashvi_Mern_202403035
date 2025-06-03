//for of loop

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`ecah char is ${greet}`);
    
}

// Maps 

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

//object are not itratable in for of loop
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }

// for(const [key,value] of myObject)
// {
//     console.log(key,':-',value);
    
// }