class User {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`username is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCource() {
        console.log(`A new cource was added by ${this.username}`);

    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCource()
chai.logme()

const masalaChai = new User('masalachai')
masalaChai.logme()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(chai === User); //give false because it is not equal it is an instance
