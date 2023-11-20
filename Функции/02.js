// function declaration - можно использовать до их создания(это запрещается!)
function sum(a = 0, b = 0){
    return a + b;
}
sum(1, 2);

//function expression - нельзя использовать до их создания. Исп-ся для того, чтобы
//функция была выражением
const sumVar = function (a = 100, b = -100){
    return a + b;
}
sumVar(1, 2);

//стрелочные функции
const sumA = (a = 0, b =0) =>  a + b;
sumA(1, 2);

const powTwo = n => n * n;
console.log(powTwo(6));
