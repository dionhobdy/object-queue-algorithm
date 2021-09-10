const data = require('./vanilla.json'); // import the json file of choice

let arr = [];
let obj = {};

for (let i = 0; i < 5; i++) {
    let arrObj = Object.create(obj);
    arrObj.id = i;
    arrObj.item = data.item[i]; // set the object item to the value of i
    arrObj.num = 0;
    arr.push(arrObj);
} // create a set number of objects and push them into the empty array

arr.sort((a, b) => {
    return a.item - b.item;
}); // sort the array from lowest item value to highest

for (let i = 0; i < arr.length; i++) {
    return arr[i];
    arr[i].num++;
    if (arr[i].num != 0) {
        delete arr[i];
    }
} // distribute and then delete array objects
