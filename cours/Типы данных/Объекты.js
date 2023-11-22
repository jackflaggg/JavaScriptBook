const human = {
    firstname: 'Vasya',
    lastname: 'Nikitin',
    age: 21,
    address: {
        city: 'Str',
        street: 'Lenina',
        home: 23,
    }
};

// свойства не могут существовать без объекта
// объект - это структура, где есть определенные свойства, которые являются ключ - значение

const message = {
    age: 7,
    author: 'Vasya',
};

//найти численные св-ва объекта.

/*
for (const key in human) {
    //console.log(key, human[key]);
    if (typeof human[key] === 'string'){
        console.log('Число: ', key);
    }
};
*/

human.address.city = 'Sterlitamak';
console.log(human.address.city);

delete human.age;

console.log(human)
const a = {agL: 2};
const b = {agL: 2};
const c = a;

c.agL = 2;

console.log(a)

