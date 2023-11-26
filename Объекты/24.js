const calculator = {
    read(One, Two, Three){
        this.One = One;
        this.Two = Two;
        this.Three = Three;
    },
    sum(){
        return this.One + this.Two + this.Three;
    },
    mul(){
        return this.One * this.Two * this.Three;
    },
};

calculator.read(8, 8, 8);
console.log(calculator.sum());
console.log(calculator.mul())