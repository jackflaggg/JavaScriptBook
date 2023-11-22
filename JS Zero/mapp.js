'use strict'

const myArray = [1, 7, 9]
console.log(myArray)

const newArray = myArray.map(element => element * (-1))
console.log(newArray)
console.log(myArray)

const myArrayTwo = [1, 4, 5]
console.log(myArray)

const newArrayTwo = myArrayTwo.map(function (el) {
    return el * 7
})

console.log(myArrayTwo)
console.log(newArrayTwo)