let arr = ["a", "b"];

arr.push(function() { // методом push добавляем функцию
    console.log( this );
});

arr[2](); // здесь 2 - это индекс элемента функции