var countBits = function(n) {
    let binaryNumber = n.toString(2);
    let count = 0;


    for (let binary in binaryNumber){
        if (binaryNumber[binary] === '1'){
            count++;
        }
    }
    return count;
};