let factorialNew = function(numberOne) {
    if (numberOne === 0) {
        return 1
    } else if(numberOne > 0){
    let result = 1;
    for(let index = 0; index < numberOne; index++){
        result *= (numberOne - index);
    }
    return result;
    } else {
        return 0;
    }
}

let proverka = factorialNew(3);
console.log(proverka);

console.log(Boolean(null));