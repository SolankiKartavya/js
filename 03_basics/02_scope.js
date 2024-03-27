let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner ",a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sk"
    function two(){
        const website = "yuoutbe"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "ks"
    if(username === "ks"){
        const web = "ypu"
        // console.log(username + web);
    }
    // console.log(web);
}
// console.log(username);


//*********************  *************************/

console.log(addone(5))
function addone(num){
    return num + 1
}

const addTwo = function (num){
    return num + 2
}
addTwo(5)