const myString = 'Rasul';
const myArray = ['first', 'second', 'elem']

for (const myStringElement of myString) {
    console.log(myStringElement, myString)
}

for (const string of myArray) {
    console.log(string)
}
// ДЛЯ МАССИВА ТОЛЬКО FOREACH

myArray.forEach((elem, index) => {
    console.log(elem, index)
})