let currentUser = {
 //   name: 'John',
 //   age: 20,
};

function isEmpty(obj){
    for (const objKey in obj) {
        return true;
    };
    return false;
};

console.log(isEmpty(currentUser))