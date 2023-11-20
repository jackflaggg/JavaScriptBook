const user = {
    name: 'Vlad',
};

function printNameOfUser(userArgument){
    userArgument.secondName = 'Petrov';
    console.log(userArgument.name);
}

let newUser = Object.assign({}, user);

let newUserTwo = structuredClone(user);

printNameOfUser(newUser);

console.log(user.secondName);

console.log(newUser)