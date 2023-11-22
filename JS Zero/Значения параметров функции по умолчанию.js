'use-strict'

function newFn(oneword = 'hello, ', twoword = ' Rasul'){
    return oneword + twoword
}

console.log(newFn('hello. '))

//анонимная функция
const newValue = function(value, multy = 1){
    return value * multy
}

console.log(newValue(12))

//стрелочная функция
let functionNew = (one = 'one', two = 2) => {
    return one + two
}

console.log(functionNew(2, 0))
