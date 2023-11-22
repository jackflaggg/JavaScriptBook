function isAdult() {
    return console.log(this.age >= 18);
};


// {} В ОБЪЕКТЕ НЕ СОЗДАЮТ ОБЛАСТИ ВИДИМОСТИ
const user1 = {
    lastname: 'Petr',
    age: 21,
    isAdult, //isAdult: isAdult,
};

const user2 = {
    lastname: 'Vitya',
    age: 14,
    isAdult: isAdult,
};

user1.isAdult();

user2.isAdult();