// замыкание

let variable = 1;

const varFunction = () => console.log(variable);

variable = 2;

varFunction();