//data type conversion or operation

let age = "20";

let valueInNum = Number(age);

console.log(typeof valueInNum);

//33 => 33
//"33abc" => NaN

let isLogin = "";

let isBoolean = Boolean(isLogin);
console.log(isBoolean);

//1 => true
//0 => false
//when its a string like "name/any charater" => ture

let someNumber = 33;

let toString = String(someNumber);
console.log(toString);
console.log(typeof toString);
