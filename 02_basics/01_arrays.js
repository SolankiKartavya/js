//array

const myArray = [0,1,2,3,4,5]
const myHeros = ["Spider",'ironman']
//console.log(myHeros[0]);

//Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

//const newArr = myArray.join()
// console.log(myArray)
// console.log(typeof newArr)

// slice , splice

console.log("A",myArray);
const my1 = myArray.slice(1,3)

console.log(my1);
console.log("B",myArray);
const my2 = myArray.splice(1,3)
console.log("C",myArray);
console.log(my2);