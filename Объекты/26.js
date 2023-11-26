let currentUser = {
 //   name: 'John',
 //   age: 20,
};

function isEmpty(obj){
    for (const objKey in obj) {
        return true;
    }
    return false;
};

function isEmptyTwo(obj){
    for (const objKey in obj) {
        return obj.hasOwnProperty(objKey);
    }
    return false;
}

console.log(isEmpty(currentUser))