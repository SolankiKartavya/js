const promiseOne = new Promise( function(resolve,reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"skboss",email:"sk@gmail.com"})
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Kartavya",pass:"1234"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolve or rejected");
})


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Java",pass:"1234"})
        }else{
            reject('ERROR js went wrong')
        }
    },1000)
})

async function consumeProFive(){
   try {
    const response = await promisefive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumeProFive()

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


//second Method


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})