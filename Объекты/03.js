let salaries = {
    John: undefined,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (const salariesKey in salaries) {
    if (salaries[salariesKey] === undefined) {
        sum = 0;
    } else {
        sum += salaries[salariesKey];
    }
};
console.log(sum);