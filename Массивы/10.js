function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum){
        return [startNum];
    } else {
        const rangeNum = rangeOfNumbers(startNum, endNum - 1);
        rangeNum.push(endNum);
        return rangeNum;
    }
};

console.log(rangeOfNumbers(4, 9))