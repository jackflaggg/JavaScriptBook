/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const newAr = [1, true, false]
console.log(newAr)

const newArTwo = newAr//.splice(2, 2, true)
newArTwo[2] = true
console.log(newArTwo)