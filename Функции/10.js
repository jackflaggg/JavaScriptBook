function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let index = 0; index < arr.length; index++){
        for (let jndex = 0; jndex < arr[index].length; jndex++){
            product *= arr[index][jndex]
        }
    }
    // Only change code above this line
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));