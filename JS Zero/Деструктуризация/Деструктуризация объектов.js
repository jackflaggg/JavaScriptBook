const userInfo = {
    name: 'Kirill',
    age: 64
}

const {name = 'Rasul', age = 99} = userInfo
console.log(name)
console.log(age)