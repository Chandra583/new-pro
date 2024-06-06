const myArr = [1, 15, 23, 22];
let mHero = ["thor", "captain", "Ironman"];
let dHero = ["Batman", "Falsh", "Superman"];

// mHero.push(dHero);
console.log(mHero); // ["thor", "captain", "Ironman", ["Batman

// let newHero = mHero.concat(dHero);
// console.log(newHero); // ["thor", "captain", "Ironman", ["Batman

// let allNewHero = [...dHero, ...mHero];
// console.log(allNewHero);

let anathoreArr = [1, 23, 43, [33, 423], [4, 56, [55, 587]]];
console.log(anathoreArr);
let crctedAry = anathoreArr.flat(Infinity);
console.log(crctedAry);
