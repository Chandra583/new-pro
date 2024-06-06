//singleton
//obekct lietereakl

const jsUSer = {
  name: "JavaScript",
  year: 322,
  type: "programming language",
  location: "Mysore",
  isloggedIn: false,
  lastLogin: ["Monday", "Friday"],
};
//we can objet at two ways

// console.log(jsUSer.name);
// console.log(jsUSer["name"]);

// jsUSer.greeating = function () {
//   console.log(`Hello World from ${this.name}`);
// };

// console.log(jsUSer.greeating());

console.log(Object.keys(jsUSer));
console.log(Object.values(jsUSer));
