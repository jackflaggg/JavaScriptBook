//Как избежать мутаций
//Spread
const person = {
    name: 'Bob',
    age: 25
}

const person2 = { ...person}

person2.name = 'Alice'

console.log(person2.name)
console.log(person.name)

/*------------------------------------------*/
const parentWife = {
    count: 2,
    religion: true
}

const parentDad = {...parentWife}

parentDad.count = 1
console.log(parentWife)
console.log(parentDad)