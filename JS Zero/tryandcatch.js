'use-strict'
const funWithError = () => {
    throw new Error('Some error')
}

try {
    funWithError()
} catch(error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')