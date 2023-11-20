const fn = () => {};
const fnTwo = () => {};
const fnThree = fn;

console.log(fn === fnTwo);
console.log(fn === fnThree)

const user = {
    name: 'Rasul',
    age: 23,
    isAdult(){
        return this.age >= 18;
    },
    isAdult: () => {
        // this === Window
        return this.age >= 18;
    }
}

// у стрелочных функций his определяется в момент создания функции

user.isAdult;