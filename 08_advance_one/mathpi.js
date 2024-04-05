const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

const sk = {
    name:'chai',
    price:250,
    isAvail:true,
    order:function(){
        console.log("not woring");
    }
}
console.log(Object.getOwnPropertyDescriptor(sk, "name"));

Object.defineProperty(sk, 'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(sk, "name"));

for (let [key,value] of Object.entries(sk)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    }
}