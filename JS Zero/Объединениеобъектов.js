'use-strict'

const buttonOne = {
    color: 'black'
}

const buttonTwo = {
    text: 'number one',
    size: 280
}

let buttonThree = {
    ...buttonOne,
    ...buttonTwo
}

console.table(buttonThree)