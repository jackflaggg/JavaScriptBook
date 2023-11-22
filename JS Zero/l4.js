//Вложенные свойства
const myCity = {
    city: 'UFA',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.country)

delete myCity.info.isPopular
console.log(myCity)

//Использование переменных
//Полный формат записи свойств
const name = 'Rasul'
const year = 23

const humanMan = {
    name: name,
    year: year,
    clock: true
}
console.log(humanMan)

//Сокращенный формат записи(размещаем их в начале)
const wear = 'Shorts'
const zero = 0
const Threads = {
    wear,
    zero,
    istrue: true
}
console.log(Threads)