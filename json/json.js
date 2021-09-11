const data = require('./json.json');

let arr = [];
let obj = {};

for (let i = 0; i < 5; i++) {
    let arrObj = Object.create(obj);
    arrObj.id = i;
    arrObj.item = data.item[i];
    arrObj.num = 0;
    arr.push(arrObj);
}

arr.sort((a, b) => {
    return a.item - b.item;
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i].num++;
    if (arr[i].num != 0) {
        delete arr[i];
    }
}

console.log(arr);