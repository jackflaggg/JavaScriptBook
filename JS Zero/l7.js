//Как избежать мутаций?
//Вариант 1

const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26
console.log(person2.age)
console.log(person.age)

let user = {
    name: 'Rasul',
    age: 22
}

const p1 = {can: true}
const p2 = {can: true}

const p3 = Object.assign({}, p1, p2)
console.log(p3)

p3.can = false
console.log(user)

/*-----------------------------------------------------------*/

const exampleOne = {
    name: 'Violetta',
    fio: {
        age: 21,
        work: true
    },
    parents: 'Mother and Father'
}

const exampleTwo = Object.assign({}, exampleOne)
exampleTwo.name = 'Bob'

console.table(exampleOne)
console.table(exampleTwo)