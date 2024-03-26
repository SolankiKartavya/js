//Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let newDate = new Date(2023, 0, 24)
// let newDate = new Date(2023, 0, 24, 1, 5)
// let newDate = new Date("2024-01-12")
let newDate = new Date("01-05-2024")
//console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(newDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let DateNew = new Date()
// console.log(DateNew.getMonth()+1);
// console.log(DateNew.getDate());

DateNew.toLocaleString('default',{
    weekday: "long",
    
})