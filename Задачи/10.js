function namify(users) {
    let nameUsers = [];
    for (let user of users) {
        nameUsers.push(user.name);
    }
    return nameUsers;
}
