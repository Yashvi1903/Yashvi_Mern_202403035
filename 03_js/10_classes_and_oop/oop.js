//Object litrals
const user = {
    username: "yashvi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from dataBase");
        console.log(`UserName: ${this.username}`); //this=>current context
        console.log(this);
        
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
// console.log(this); give empty


function User(username,loginCount,isloggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function()
    {
        console.log(`Welcome ${this.username}`);
        
    }
    return this //by default defined 
}

const userOne = new User("yashvi",12,true); //constructor function
const userTwo = new User("chai or code",11,false)
console.log(userOne.constructor);
