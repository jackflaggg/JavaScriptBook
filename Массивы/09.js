function findMaxSubarray(arr) {
    let maxSum = arr[0];  // Максимальная сумма подмассива
    let currentSum = arr[0];  // Текущая сумма подмассива
    let start = 0;  // Индекс начала максимального подмассива
    let end = 0;  // Индекс конца максимального подмассива

    for (let i = 1; i < arr.length; i++) {
        // Если текущая сумма стала меньше значения текущего элемента, начинаем новый подмассив
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            start = i;
        } else {
            currentSum += arr[i];  // Продолжаем расширять текущий подмассив
        }

        // Если текущая сумма больше максимальной, обновляем максимальную сумму и индексы
        if (currentSum > maxSum) {
            maxSum = currentSum;
            end = i;
        }
    }

    // Возвращаем максимальную сумму и подмассив
    return {
        sum: maxSum,
        subarray: arr.slice(start, end + 1)
    };
}

// Пример использования:
let array = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let result = findMaxSubarray(array);

console.log("Максимальная сумма подмассива:", result.sum);
console.log("Подмассив с максимальной суммой:", result.subarray);