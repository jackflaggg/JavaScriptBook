let calculator = {
    read(a, b){
       this.a = a;
       this.b = b;
    },
    sum(){
        return this.a + this.b;
    },
    mul(a, b){
        return this.a * this.b;
    }
}

calculator.read(14, 5);
console.log(calculator.mul());