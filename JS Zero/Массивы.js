'use-strict'
//создание массива
const arrayNew = [1_000_000, 2 , 'abc']
let num = 234.7878
arrayNew.push(true)

arrayNew.pop()

console.log(arrayNew)
//debugger;
arrayNew.shift()

arrayNew.unshift(1)

console.log(arrayNew)
console.log(1e6 === 1*1_000_000)
console.log(num.toFixed(1))