function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("F");
    console.log("G");
    console.log("J");
    console.log("H");
}

// sayMyName();

// function Addition(num1 , num2){
//     console.log(num1 + num2);
// }

function Addition(num1 , num2){
    // let result = num1 + num2;
    // return result
    return num1 + num2
}
const resu = Addition(3,4)

// console.log("result:",resu);

function loginUserM(username = "sk"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserM("Kartavya"))
// console.log(loginUserM())


function calCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calCartPrice(200,400,500,1400));


const user = {
    username:"sk",
    price:190
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username:"sf",
    price:451
})

const myArray = [200,458,965,700]

function returnSecond(getAray){
    return getAray[0]
}

// console.log(returnSecond(myArray));
console.log(returnSecond([455,874,895,895]));