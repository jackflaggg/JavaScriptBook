function factorial(n) {
    let i = 0 //переменная счетчика
    let result = 1 // переменная для хранения полученного рез-та
    let message = '' //переменная вывода для некорректных значений
    if (n>0) {
        while (i < n){
            result *= 1*(n-i)
            i++
        };
        return result
    } else if (n === 0) {
        return 1
    } else if (n < 0 || typeof n != 'number'){
        return 0
    }
}