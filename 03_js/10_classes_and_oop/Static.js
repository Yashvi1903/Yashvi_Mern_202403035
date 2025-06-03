class User{
    constructor(username)
    {
        this.username = username
    }

    logme(){
        console.log(`Username ${this.username}`);
    }
    //static method ne access na karva de
    static createId()
    {
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email = email
    }
}

const yashvi = new User("yashvi")
//static method can't called
//console.log(yashvi.createId());

const iphone = new Teacher("iphone","i@phone.com")
iphone.logme()
//static method can't called
//console.log(iphone.createId());
