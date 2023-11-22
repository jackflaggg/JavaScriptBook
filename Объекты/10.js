const myCity = {
    article: true,
    count: 1,
};

myCity['article'] = false;
myCity.article = true;

let nameBar = 'Moscow';
myCity['nameBar'] = true;

console.log(myCity)