//singltom

//const tinderUser = new Object()
//non singlton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ajay"
tinderUser.isLog = false


//console.log(tinderUser);

const regularUser = {
    email: "sk@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kartavya",
            lastname:"Solanki"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLog'));

const cource = {
    cname: "js",
    price:1000,
    cInstructor:"skboss"
}

// cource.cInstructor
const {cInstructor: inst} = cource

console.log(inst);

//API

// {
//     "name":"solanki",
//     "cname":"js",
//     "price":"free"
// }