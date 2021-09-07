let obj = {};
let arr = [];

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomObjInt = randomInt(1000000);

for (let i = 0; i < randomObjInt; i++) {
    let arrObj = Object.create(obj);
    arrObj.num = 0;
    arrObj.id = i;
    arrObj.item = randomInt(100);
    arr.push(arrObj);
}

arr.sort((a, b) => { return a.item - b.item });

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i].num++;
    if (arr[i].num != 0) {
        delete arr[i];
    }
}
