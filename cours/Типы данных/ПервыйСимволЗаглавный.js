function ucFirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let result = ucFirst('лолл');
console.log(result);