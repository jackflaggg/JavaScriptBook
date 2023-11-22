'use strict'

const userProfile = {
    name: 'Rasul',
    age: 23,
    hasSignedAgreement: false
}

const userInfo = ({name, age}) => {
    if (!age){
        return `User ${name} has no comments`
    }
    return `User ${name} has ${age} comments`
}
userInfo(userProfile)
