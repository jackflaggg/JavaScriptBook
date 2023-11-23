let age = 18;

let welcome = (age < 18) ?
    function() { console.log("Привет!"); } :
    function() { console.log("Здравствуйте!"); };

welcome();