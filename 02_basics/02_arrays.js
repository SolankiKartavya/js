const Mheros = ["thor","ironman","spiderman"]
const Dcheros = ["superman","flash","batman"]

//Mheros.push(Dcheros)

// console.log(Mheros);

// const allHero = Mheros.concat(Dcheros)
// console.log(allHero);

const all_new_hero = [...Mheros,...Dcheros]
//console.log(all_new_hero);

const anotherArray = [1,2,3,4,[5,6,7],8,[4,5,[5]]]
const real_ano = anotherArray.flat(Infinity)
//console.log(real_ano);

console.log(Array.from("fdgy"));
//console.log(Array.from({name:"fdgy"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));