'use-strict'

const personName = {
    name: 'Rasul',
    age: 27
}

let personFamily = {
    ...personName,
    home: 'Artema 128'
}
console.table(personFamily)
personFamily.name = 'Bob'

console.table(personFamily)