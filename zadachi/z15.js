/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */
let swap = /Morning/gi;
const peremOne = "Good Morning"
const peremTwo = peremOne.replace(swap, 'Evening')
console.log(peremTwo)