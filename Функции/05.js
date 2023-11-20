function messageCreator(name) {
    function logMessage(msg) {
        console.log(`${name}: ${msg}`)
    }
    return logMessage;
}

const vasya = messageCreator('Vasya');
const kolya = messageCreator('Kolya');

vasya('lloll');
kolya('holl');