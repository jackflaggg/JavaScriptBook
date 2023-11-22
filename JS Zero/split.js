'use strict'

let str = 'Петя, Вася, Коля';
let oneStr = 'Rasul'
const arr = str.split(', ');
for (let name of arr){
    console.log(`Данное ообщение получает: ${name}`)
}

console.log(oneStr.split(''))
