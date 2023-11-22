function hello(){
    console.log('Hello', this);
}

const person = {
    name: 'Rasul',
    age: 23,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo(){
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        //console.log();
    }
}

const lena = {
    name: 'Elena',
    age: 19,
}

person.logInfo.bind(lena)()