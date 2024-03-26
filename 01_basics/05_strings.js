const name = "Kartavya"
const repo = 2

//console.log(` hello my name is ${name} and repo ${repo}`);

const game = new String('Skboss')

console.log(game[0]);

console.log(game.indexOf('b'));

const newgame = game.substring(0,2)
console.log(newgame);

const anotgame = game.slice(-4,4)
console.log(anotgame);

const newStr = "    skbosshello      "
console.log(newStr);
console.log(newStr.trim());

const url = "https//skboss.com/s%kartavya"
console.log(url.replace('%','-'));

console.log(url.includes('dfgh'));

console.log(url.split('%'));