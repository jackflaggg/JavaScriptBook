//Массив - упорядоченный набор данных, включает в себя несколько объектов

const files = ['1.txt', '2.txt', '3.txt'];
files.property = 'value';
Array.isArray(files);

for (let index = 0; index < files.length; index += 1){
    console.log(files[index]);
}
/*
const foo = ['1.txt', 1, null, () => {}, {}, [], undefined, true];
for (let index = 0; index < foo.length; index += 1){
    console.log(foo[index]);
}


for (let fooElement of foo) {
    console.log(fooElement)
}*/