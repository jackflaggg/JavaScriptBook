function sayHi() {   // (1) создаём
    console.log( "Привет" );
}

let func = sayHi();    // (2) копируем

func; // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)