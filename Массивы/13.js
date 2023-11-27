function zeroArray(m, n) {
    // создаем массив для хранения кол-ва строк
    let newArray = [];

    for (let i = 0; i < m; i++) {
        // создаем массив столбцов
        let row = [];
        for (let j = 0; j < n; j++) {
            //находимся в первом индексе строки и заполняем ее столбцами
            row.push(0);
        }
        // добавляем массив заполненных столбцов в массив строк
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
