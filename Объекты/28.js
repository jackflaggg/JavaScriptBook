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

for (const objElement of obj) {
    if (objElement.name === 'Bob'){
        let bob = objElement.name;
        console.log(bob)
    }
};

const bobOne = obj.find((user) => user.name === 'Bob');
console.log(bobOne.name)