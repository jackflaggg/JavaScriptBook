const obj = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Bob",
        age: 21,
    },
    {
        name: "Anna",
        age: 19,
    },
];

for (let i = 0; i < obj.length; i++) {
    if (obj[i].name === 'John'){
        console.log(obj.splice(i, 1));
    }
}
console.log(obj)