/**
 * Эту функцию трогать не нужно
 */
function print(text) {
    console.log(text);
  }
  
  /**
   * Эту функцию нужно поменять так,
   * чтобы функция sayHello работала корректно
   * @param {string | null} name
   * @returns {boolean}
   */
  function isValid(name) {
    if (Boolean(name) && name.length >= 4 && !name.includes(' ')){
        return true;
    } else {
        return false;
    }
  }
  
  /**
   * Эту функцию трогать не нужно
   */
  function sayHello(userName) {
   // let userName = prompt('Введите ваше имя');
  
    if (isValid(userName)) {
      print(`Welcome back, ${userName}!`);
    } else {
      print('Некорректное имя');
    }
  }
  
  sayHello('Ras');