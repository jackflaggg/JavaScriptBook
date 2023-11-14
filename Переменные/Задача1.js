'use strict'

//синтаксические проверки
let billionOne = 10000000;

let billionTwo = 1_000_000_000;

let billionThree = 1e9;

console.log(1_000_000_000 === 1e9)
console.log(0xff)

// работа с различными системами сяислениями
let num = 255;
console.log(num.toString(16))
console.log((123456).toString(36))

//округление
let number = "12pt";
let numberOne, numberTwo, numberThree = 3.1;
let sum = numberOne + numberTwo;
console.log(Math.ceil(numberOne));
console.log(Math.round(numberTwo));
console.log(Math.trunc(numberThree));
console.log(+sum.toFixed(2));
console.log(parseInt(number));