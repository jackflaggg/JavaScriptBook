let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
};
function sumSalary(salaries) {
    let sum = 0;
    for (x in salaries) {
        if (isFinite(salaries[x])) sum += salaries[x];
    }
    return sum;
};

console.log(sumSalary(salaries))