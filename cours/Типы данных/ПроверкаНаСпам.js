function checkSpam(str) {
    let niz = str.toLowerCase();
    return niz.indexOf('xxx') != -1 || niz.indexOf('1xbet') != -1;
}

let result = checkSpam('free XXx');
console.log(result)