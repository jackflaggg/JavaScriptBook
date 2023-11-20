function sum(a = 10, b = 90){
    return a + b;
}

let result = sum(undefined, 2);
console.log(result)


function currenDate() {
    console.log(Date.now());

    return; // return undefined
}

console.log(currenDate() === undefined)