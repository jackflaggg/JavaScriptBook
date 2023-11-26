function sum(arr, n) {
    if (n <= 0){
        return 0;
    } else {
        return sum(arr, n-1) + arr[n - 1];
    }
}

console.log(sum([5, 2, 3], 2))