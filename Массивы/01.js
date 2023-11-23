//Массив - упорядоченный набор данных, включает в себя несколько объектов

const files = ['1.txt', '2.txt', '3.txt'];
let newObj = {};
files.property = 'value';
console.log(Array.isArray(newObj));

for (let i = 0; i < files.length; i ++){
    console.log(i);
}
/*
const foo = ['1.txt', 1, null, () => {}, {}, [], undefined, true];
for (let index = 0; index < foo.length; index += 1){
    console.log(foo[index]);
}


for (let fooElement of foo) {
    console.log(fooElement)
}*/