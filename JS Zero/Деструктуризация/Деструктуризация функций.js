'use strict'

const newHuman = {
    name: 'Rasul',
    age: 23,
    wife: true
}

const userInfoHuman = ({name, age}) => {
    if (!age) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${age} comments`
}

userInfoHuman(newHuman)