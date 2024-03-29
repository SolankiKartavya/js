//for of

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const gre = "Hello word!"
// for (const greet of gre) {
//     if(greet===" "){
//         continue
//     }
//     else{
//         console.log(`Each char is ${greet}`);

//     }
// }


//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Sates of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
}
//map.set('IN',"India")
// console.log(map);

//  for (const [key, value] of map) {
//     console.log(key , ':-' , value);
// }

const myObj = {
    g1:'NGS',
    g2:'spider'
}

// for (const [key, value] of myObj) {
//     console.log(key , ':-' , value);
// }

