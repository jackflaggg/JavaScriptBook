'use-strict'

//неявный возврат объекта
const newPost = (post, addedAd = Date()) => ({
    ...post,
    addedAd:addedAd
    //а можно и просто addedAd
})
//если мы хотим неявно вернуть объект
//то необходимо обернуть тело в ()

const firstPost = {
    id: 1,
    name: 'Rasul'
}

console.table(newPost(firstPost))

//явный возврат объекта при помощи создания нового объекта
const addFunction = (ad, doubleAd = Date()) => {
    ad = {...ad},
    doubleAd
    const objectNew = {
        ad,
        doubleAd
    }
    return objectNew
}

const adPol = {
    newId: 1,
    nameId: 'Nikita'
}

console.table(addFunction(adPol))

//явный возврат объекта
const returnFn = (one, two = Date()) => {
    return {
        ...one,
        two
    }
}

const newPerson = {
    firstName: 'misha',
    firstId: 23
}

console.table(returnFn(newPerson))