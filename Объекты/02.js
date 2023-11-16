// Проверка на пустоту

function isEmpty(obj) {
    for(let index in obj){
        return false;
    }

};

let human = {
    //age: 20,
    //'let const': true,
};

let result = isEmpty(human);
console.log(result)