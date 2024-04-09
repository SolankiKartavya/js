const user = {
    username:"kartavya",
    logincount:8,
    signedIn:true,

    getUserDet:function(){
        // console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDet());

// const date = new Date()
// const prom = new Promise()
function User(username,loginCount,issLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.issLoggedIn=issLoggedIn;
    return this
}

const userOne = User("sk",12,true)
const userTwo = User("sKartvaya",712,false)
// console.log(userOne);
console.log(userTwo);