const name = "yashvi "

const repoCount = 50 

//console.log(name + repoCount + "Value");
//more readable 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Yashvi-yk')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)

console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,5);
console.log(newString);

const anotherstring = gameName.slice(-8,4)//piche se start karega 
console.log(anotherstring);

const newstring1 = "    yashvi   "
console.log(newstring1)
console.log(newstring1.trim())//remove space

const url = "https://yashvi.com/yashvi%20patel"
console.log(url.replace('%20','-'))
console.log(url.includes('yashvi'));

const splitname = "yashvi-patel-ykp"
console.log(splitname.split('-'))//converter into array


