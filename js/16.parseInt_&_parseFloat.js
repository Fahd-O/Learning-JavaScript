//useful for converting single numbers from a character data type to a number data type. The first non-space character has to be a number, else the number won't be recognised. And anything else after the first identified number gets truncated.

let x = 7;
let y = "9";
console.log(x + y);//here, number 7 simply gets glued to character "9" and not added

let a = 30;
let b = "70";
let bInt = Number.parseInt(b);
console.log(a + bInt);

let c = 35;
let d = "59.903367";
let dInt = Number.parseFloat(d);
console.log(c + dInt);

let e = 25;
let f = "10.321";
let fInt = Number(f);
console.log(e + fInt);
