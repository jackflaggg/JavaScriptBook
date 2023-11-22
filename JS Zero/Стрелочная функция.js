'use-strict'

const myLegolas = (a) => {
    let c 
    a += 1
    c = 2*a

    return c
}

console.log(myLegolas(10))

//Стрелочная функция как колбэк функция

setTimeout(() => {
    console.log('test')
}, 1000)