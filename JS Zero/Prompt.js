'use-strict'
//Задача 1
/*
const number1 = +prompt('Введите первое число: ', 'Любое целое число');
const number2 = +prompt('Введите второе число: ', 'Любое целое число');

function promptSum(a, b) {
    return a + b
}

const result = promptSum(number1, number2)
console.log(result)
*/

//Задача 2
console.log(6.35.toFixed(1))

//Задача 3
const newNumber = +prompt('Введите числовое значение: ', '');

function readNumberUser(number) {
    if (number === null || number === ''){
      return null
    } else {
      return number
    }
}

alert('Число: ' + readNumberUser(newNumber))