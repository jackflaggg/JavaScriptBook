/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
'use-strict'

const myName = 'Rasul'
const mySurname = 'Khamzin'
const myProfession = 'sys admin'

let multyPerem = "Меня зовут " + myName + " " + mySurname + " и я " + myProfession
console.log(multyPerem)
//2 вариант
let multyPeremTwo = `My name is ${myName} ${mySurname} and I am ${myProfession}`
console.log(multyPeremTwo)