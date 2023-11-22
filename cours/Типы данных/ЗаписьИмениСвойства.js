let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  
  // доступ к свойству через переменную
  console.log( user.key); // John (если ввели "name")
  console.log("age" in user);