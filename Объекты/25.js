let user = new String('John'); // получаем String-объект, а не примитив.
user.sayHi= function() { // определяем свойство для нашего объекта
    return console.log("said Hi");
};
let database = user['sayHi']();
console.log(typeof user)