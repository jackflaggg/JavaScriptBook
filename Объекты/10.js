const myCity = {
    article: true,
    count: 1,
};

myCity['article'] = false;
myCity.article = true;

let nameBar = 'count';
myCity['nameBar'] = true;


myCity['foo'] = 123;
console.log(myCity)
console.log(myCity[nameBar])