const user = {
    name: 'Vlad',
};

function printNameOfUser(userArgument){
    userArgument.secondName = 'Petrov';
    console.log(userArgument.name);
};

printNameOfUser(user);
console.log(user.secondName);