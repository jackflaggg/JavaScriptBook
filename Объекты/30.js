const objOne = {
    name: 'David',
    school: '32',
    age: 10,
    isInvalid: false,

// определяем метод Symbol iterator внутри объекта
[Symbol.iterator]()
{
    const properties = Object.keys(this); // используем метод, который возвращает массив из св-в
    let index = 0; // отслеживание текущего индекса при итерации по свойствам

    return {
        next: () => {                           //возвращаем следующий элемент итерации
            if (index < properties.length) {            //если еще не перебрали все св-ва
                const key = properties[index];  //присваиваем значение св-ва объекта в переменную ключ
                const value = this[key];               //получаем значение св-ва объекта
                index++;                               //переход к следующему св-ву
                return { value, done: false };         // вовзращаем объект с двумя св-вами, содержащим текущее значение св-ва объекта и done:
                                                        // наличие элементов для итерации(булевская переменная)
            } else {
                return { done: true };                  //если элементы для итерации закончились
            }
        }
    };
},
};

const thisIs = Object.keys(objOne);
for (const thisI of thisIs) {
    console.log(thisI)
}


/*for (const objOneElement of objOne) {
    console.log(objOneElement);
}*/