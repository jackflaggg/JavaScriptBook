function  multiplyNumeric(obj){
    for (const menuKey in menu) {
        if (typeof menu[menuKey] == 'number' || typeof  menu[menuKey] == 'bigint'){
            menu[menuKey] *= 2;
        }
    }
}

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)

