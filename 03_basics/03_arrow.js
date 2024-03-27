const user = {
    username:"kartavya",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "eth"
// user.welcomeMessage()
// console.log(this);

// function skboss(){
//     let username = "skboss"
//     console.log(this.usernamer);
// }
// skboss()

// const skboss = () =>{
//         let username = "skboss"
//         console.log(this);
// }
// skboss()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username:"hiefh"})

console.log(addTwo(4,5));