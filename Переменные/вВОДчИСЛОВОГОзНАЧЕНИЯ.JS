let readNumber = function(Chislo){
    let numberVvod = +prompt('Введите числовое значение: ');
    if (typeof(numberVvod) == 'number') {
        return numberVvod;
    }
    else {
        return null;
    }
}

let result = readNumber(3)