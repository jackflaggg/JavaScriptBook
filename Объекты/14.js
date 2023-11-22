function multiplyNumeric(obj){
    for (const objKey in obj) {
        if (typeof obj[objKey] === 'number'){
            obj[objKey] *= 2;
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu));