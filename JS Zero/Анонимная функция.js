'use-strict'

setTimeout(function(){console.log('sos!!!!')}, 1000)

//присваивание функционального выражения
const myFn = function(a, b){
    let c
    a += 1
    c = a + b
    return c
}

//объявление функции
function setData(time){
    time *= 86400
    return time
}

console.log(setData(2))
console.log(myFn(10, 10))