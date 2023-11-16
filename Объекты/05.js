// копирование объектов
let user = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

console.log( clone ); // все ещё John в первоначальном объекте

let cloneTwo = {};
Object.assign(cloneTwo, clone, user);
console.log(cloneTwo)