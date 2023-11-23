let age = 18;

let welcome = (age < 18) ?
    function() { console.log("Привет!"); } :
    function() { console.log("Здравствуйте!"); };

welcome();

let chetnost = a => a % 2 === 0 ? console.log(true) : console.log(false);
chetnost(22)