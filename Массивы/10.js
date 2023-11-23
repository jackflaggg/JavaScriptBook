function sumAll(...args){
    let sum = 0;

    for (const arg of args) sum += arg

    return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6