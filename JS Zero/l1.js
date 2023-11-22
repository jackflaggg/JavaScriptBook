const humanMan = {
    name: 'Rasul',
    age: 22,
    sex: 'men',
    height: 172,
    massa: 54,
    typeOfActivity: 'sys admin'
}

let clonMan = humanMan

clonMan.name = 55
clonMan.age = clonMan.age + 1
console.table(clonMan)