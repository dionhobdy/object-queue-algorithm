let centralObj = {
    item0:0,
    item1:1,
    item2:2,
};

let centralArr = [];

let arrObj0 = {
    item: centralObj.item2,
    num: 0
};

let arrObj1 = {
    item: centralObj.item0,
    num: 0
};

let arrObj2 = {
    item: centralObj.item1,
    num: 0
};

centralArr.push(arrObj0, arrObj1, arrObj2);

centralArr.sort((a, b) => {
    return a.item - b.item;
});

for (let i = 0; i < centralArr.length; i++) {
    centralArr[i].num++;
    if (centralArr[i].num > 0) {
        delete centralArr[i]
    }
}