// Получение свойств
const myCity = {
    city: "Sterlitamak",
    popular: true,
    country: "Russia"
}

console.log(myCity.city)
console.log(myCity.popular)

//Изменение свойств
const myClock = {
    brand: 'Panasonic'
}

myClock.brand = 'Samsung'
console.log(myClock.brand)

//Добавление нового свойтсва
const myCar = {
    color: 'black',
    type: 'authomat'
}

myCar.typeOfCar = "kamaz"
console.table(myCar)

//пример

const myWife = {
    name: 'Elena'
}

myWife.popular = true
console.log(myWife)

myWife.popular = false
console.log(myWife)

//удаление свойств
const myDick = {
    height: 15,
    color: 'white',
    popular: true
}

delete myDick.color
console.log(myDick)

//доступ к значению свойства с испрльзованием скобок
const myFilm = {
    name: 'Avengers',
    length: '3h'
}

myFilm['popular'] = true
console.log(myFilm)

delete myFilm.popular

const countryPropertyName = 'country'
myFilm[countryPropertyName] = 'USA'

console.log(myFilm)