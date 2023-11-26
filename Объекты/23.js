/*Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города,
строка)
со значением «ГородN» и population (населенность города, число) со значением 10 млн.*/

function getObj(){
    return this;
}

let city = {
    name: 'Sterlitamak',
    population: 10e6,
    getName(){
        return this.name;
    },
    exportStr(){
        return `${this.name}=Sterlitamak\n${this.population}=10000000\n`
    },
    getCity() {
        return this.getObj();
    }
};

let cityTwo = {
    name: 'UFA',
    population: 1e6,
    getName() {
        return this.name;
    },
    exportStr(){
        return `${this.name}=UFA\n${this.population}=1000000\n`
    },
    getCity(){
        return this.getObj();
    },
};

let obj = {
    methodOne(){
        return this;
    },
    methodTwo(){
        return this;
    },
    methodThree(){
        return "метод 3";
    },
}

console.log(obj.methodOne().methodTwo().methodThree());