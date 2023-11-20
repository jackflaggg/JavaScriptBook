function read(numOne, numTwo)  {
    this.a = numOne;
    this.b = numTwo;
}

function sum(numOne, numTwo)  {
    return this.a + this.b;
}

function mul(numOne, numTwo)  {
    return this.a * this.b;
}

const calculator = {
    a: 0,
    b: 0,
    read,
    sum,
    mul,
};

calculator.read(1, 6);
calculator.sum(1, 6);
calculator.mul(1, 6);