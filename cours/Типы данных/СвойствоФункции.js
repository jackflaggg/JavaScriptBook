const user = {
    lastname: 'Petr',
    age: 21,

    isAdult() {
        return this.age >= 18;
    }
}

user.isAdult();

const admin = user;
admin.age = 16;
//удаление объекта
//ключевое слвоо this - объект, для которого вызывается функция

let Women = {
    age: 30,
    isAdmin: false,
    'this is Women': true,
};

for (const key in Women) {
    console.log(Women);
};

console.log(Women["this is Women"]);