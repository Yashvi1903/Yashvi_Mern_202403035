// class User{
//     constructor(email,password)
//     {
//         this.email = email;
//         this.password = password;
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(email){
//         this._email = email
//     }

//     get password(){
//         return `${this._password}yashvi`
//     }
//     set password(password){
//         this._password = password;
//     }
// }

// const yashvi = new User("yashvi@gmail.com","abc");
// console.log(yashvi.password);


// *************************getter-setter using Defineproperty*******************************

// function User(email,password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })
// }

// const yashvi = new User("yashvi@gmail.com","abc");
// console.log(yashvi.email);

// !....................object based getter/setter...................................!

const User = {
    _email: "yashvi@gmail.com",
    _password: "123",

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User);
console.log(tea.email);
