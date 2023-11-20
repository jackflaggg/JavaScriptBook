let str = 'my-short-string';
function camelize(str) {

    let newStr = str.split('');

    for (const key in newStr) {
        if (newStr[key]==='-'){
            newStr[key-1] = newStr[key-1].toUpperCase();
            newStr.splice(key, 1);
        }
    }
    return console.log(newStr.join(''))
}

camelize(str)
