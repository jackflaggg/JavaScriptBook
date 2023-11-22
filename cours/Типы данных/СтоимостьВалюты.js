'use strict'

function extractCurrencyValue(str) {
    //if (isNumber(str)) return str;
    return +(str.slice(1, str.length +1));
}

let result = extractCurrencyValue('%120');
console.log(result);