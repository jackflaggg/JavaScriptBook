/*function isEmpty(obj){
    for (const objKey in obj) {
        if (obj.hasOwnProperty(objKey)){
            return false;
        }
    }
    return true;
}
*/

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let name = {
    age: 32,
}

console.log(isEmpty(name))