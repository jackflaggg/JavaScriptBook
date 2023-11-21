function sumSalary(salaries) {
    let sum = 0;
    for (x in salaries) {
        if (isFinite(salaries[x])) sum += salaries[x];
    }
    return sum;
}
