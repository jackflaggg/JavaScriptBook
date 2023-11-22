//копирование значений
const a = 10
let b = a
b = 30
console.log(a) // значение не изменилось
console.log(b)

//значения ссылочного типа
//мутирование объекта
const person = {
    name: 'BOB',
    age: 21
}
person.age = 22
person.isAdult = true

console.log(person.age) // 22(мутация объектов) сама переменная хранит ссылку на объект
console.log(person.isAdult) // true

//мутирование объекта через копию
const person2 = person

person2.age = 25
person2.isAdult = true
console.log(person.age) // 25(person2 and person ссылаются на один объект в памяти)
console.log(person.isAdult) // true

/* ------------------------------------------------------------------------------------ */

const copyA = {
    ssilka1: true,
    ssilka2: 10,
    ssilka3: 'abc'
}

copyA.ssilka1 = false
console.table(copyA)

const copyB = copyA
copyB.ssilka3 = 'xyz'
console.table(copyA)
///////////////////

