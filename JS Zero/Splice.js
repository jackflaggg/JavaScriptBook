'use-strict'
//splice
const newArr = [1, 2, true, 'abc']
let reverseArr = newArr.splice(2, 0, 'xyz') // удаление 1-ых двух элементов

console.log(newArr)

//slice
const arr = ['a', 'b', 'z']
console.log(arr.slice(-2))

//concat
let arrConcat = [1, 6, 7],
    newConcat = arrConcat.concat([true, false]),
    reverseNew = arrConcat.concat([false, false], 1, 0);

console.log(newConcat)
console.table(reverseNew)

arrConcat.forEach((item, index, array) => {
    console.log(`У ${item} индекс ${index} в ${array}`);
  });