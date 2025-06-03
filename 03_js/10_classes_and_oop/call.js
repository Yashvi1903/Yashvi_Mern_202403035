function SetUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password)
{
    //SetUsername.call(username)//technically called but username not get
    SetUsername.call(this,username) //Aa parent function nu this use kare  
    this.email=email
    this.password=password
}

const chai = new createUser("chai","chai@fb.com","112244")
console.log(chai);
