/* Лексическое окружение - это скрытый, невидимый объект, который создается автоматически
есть у ф-ий и скриптов
состоит из двух частей: список переменных и ссылка на родительское окружение
 */

/* Замыкания - это способность функции в js запоминать лексическое окружение, в котором она была создана,
т.е хранить в себе ссылку на это окружение
 */

function makeCounter(count) {
    return function () {
        return count++;
    };
}

let counter = makeCounter(0);
let counter2 = makeCounter(0);
console.log(counter())
console.log(counter())

console.log(counter2())
console.log(counter2())