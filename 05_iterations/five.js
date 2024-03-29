const coding = ["js","python","java","ruby"]

// coding.forEach( function(item){
//     console.log(item);
// })

// coding.forEach( (it) => {
//     console.log(it);
// } )

// function PriMe(item){
//     console.log(item);
// }
// coding.forEach(PriMe)

// coding.forEach( (ite , index,arr)=>{
//     console.log(ite,index,arr);
// } )

const myCode = [
    {
        lname : "Javascript",
        lfile : "js"
    },
    {
        lname : "Java",
        lfile : "java"
    },
    {
        lname : "Python",
        lfile : "py"
    }
]

myCode.forEach( (item)=>{
    console.log(item.lname);
} )