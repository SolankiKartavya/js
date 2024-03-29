const myNms = [1, 2, 3]

// const myTotal = myNms.reduce(
//     function (acc, curlav){
//         console.log(`acc: ${acc} and curval: ${curlav}`);
//         return acc + curlav
//     },3
// )

const myTotal = myNms.reduce( (acc , cur) => acc + cur,0)

console.log(myTotal);


const shoopCart = [
    {
        itemname:"js cource",
        price:2999
    },
    {
        itemname:"py cource",
        price:3999
    },
    {
        itemname:"Mobile cource",
        price:5999
    },
    {
        itemname:"Date sci cource",
        price:12999
    }
]

const PricetoPay = shoopCart.reduce((acc,item)=>(acc + item.price),0)
console.log(PricetoPay);