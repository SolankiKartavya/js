//for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    //console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("---------------------");
// }

let myArray = ["flash","batmna","spider"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//break and con

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`5 Detected`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 Detected`);
        continue
    }
    console.log(`Value of i is ${index}`);
}