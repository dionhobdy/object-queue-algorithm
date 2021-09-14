const loot = require('./loot.json');

let arr = [];
let obj = {};

function randomInt(max) {
    return Math.floor(Math.random() * max);
} // random number generator to help determine the occurance of certain item values

for (let i = 0; i < 6; i++) {
    let arrObj = Object.create(obj);
    arrObj.id = i;
    arrObj.num = 0;

    if (i < 3) {
        arrObj.item = loot.item[0][0];
    } else if (i >= 3 && i < 5) {
        arrObj.item = loot.item[1][0];
    } else {
        let rareChance = randomInt(100);
        switch (obj) {
            case rareChance < 80:
                arrObj.item = loot.item[0][0];
                break;
            case rareChance >= 80:
            case rareChance < 95:
                arrObj.item = loot.item[1][0];
                break;
            default:
                let rarity = randomInt(74);
                if (rarity <= 59) {
                    arrObj.item = loot.item[2][0];
                } else if (rarity > 60 && rarity <= 70) {
                    arrObj.item = loot.item[3][0];
                } else {
                    arrObj.item = loot.item[4][0];
                }
        }
    }

    arr.push(arrObj); // push the new object into the empty array
}

arr.sort((a, b) => a.item - b.item); // sort the array objects by item value

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i]++;
    if (arr[i].num != 0) { delete arr[i] }
} // distribute and delete the results individually