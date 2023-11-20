const users = [
    {
        name: 'Vlad',
        from: 'Moscow',
    },
    {
        name: 'Rasul',
        from: 'Ufa',
    },
    {
        name: 'Kolya',
        from: 'Saint-P.',
    },
    {
        name: 'Petya',
        from: 'Moscow',
    },
];

//1

function namesFromMoscow(users){
    const names = [];
    for (let user of users) {
        if (user.from === 'Moscow'){
            names.push(user.name);
        }
    }

    return console.log(names);
}

// фильтр по юзерам из мск и получить их имена(преобразовать объекты в имена)
function namesFromMoscowTwo(users){
   return users
       .filter(user => user.from === 'Moscow')
       .map(user => user.name);
}

namesFromMoscowTwo(users);