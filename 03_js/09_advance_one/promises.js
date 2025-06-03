//The Promise "object" represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//fetch is a globle fetch method starts the process of fetching a response is available
// !fetch return the promise
// & fetch() promise does not reject on HTTP errors 

const promise1 = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls,cryptography,network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve();
    }, 1000)
})
//.then have direct relation with resolve
promise1.then(function () {
    console.log("promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async tast two");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");

})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "yashvi", email: "ykp@example.com" })

    }, 1000)
})

promise3.then(function (user) {
    console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "yashvi", password: "12446566" })
        }
        else {
            reject("error: Something wents wrong")
        }
    }, 1000)
})

promise4
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);

    }).finally(() => console.log("the promise is either resolve or rejected"))


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "nothing", password: "12446566" })
        }
        else {
            reject("error: JS wents wrong")
        }
    }, 1000)
})

async function consumepromise5() {
    try {
        const responce = await promise5
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumepromise5();

//using async function
// async function getAllUsers() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await responce.json()
//         console.log(data);
        
//     }catch(error)
//     {
//         console.log("E: ",error);
//     }
   
// }
// getAllUsers()



//using then/catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


// async ni andar aaj await kam kare
// promiseAll badha execution ne same time aai run  kare
// !promise,fetch,async/await --> microtask kevay
// &settimeout,setinterval --> macrotask kevay
// *microtask pela run thay pachi macro
// await use na karvi fetch karti vakhate to promise {<pending>} batave
// ~ async function,then and fetch all return promise