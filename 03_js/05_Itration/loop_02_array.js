const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
        console.log(key,':-',myObject[key]);
        
}

const myarray = ["js","rb","py","java","cpp"]

for (const key in myarray) {
    console.log(myarray[key]);
    
}


//maps are not itratable with for-in loop
// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States of America")
// map.set('UK',"United Kingdom")

// for (const key in map) {
//     console.log(key);
    
// }

