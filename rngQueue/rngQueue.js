let obj = {}; // empty object. this will be our central object used for arr
let arr = []; // empty array. this will contain duplicated objects

function randomInt(max) {
    return Math.floor(Math.random() * max);
} // random number generator. creates a number based on max

let randomObjInt = randomInt(10); // randomInt should be used to generate a random number of duplicated objects. indexed 0 - 9

for (let i = 0; i < randomObjInt; i++) {
    let arrObj = Object.create(obj); // create a new object from obj
    arrObj.num = 0; // num will be used to delete the object after it is returned when it doesn't equate to 0
    arrObj.id = i; // mark the id of the object based on i 
    arrObj.item = randomInt(100); // geneate a random value for the object's 'item'
    arr.push(arrObj); // push the object into arr
} // for loop that creates duplicate objects. number of objects is based on randomObjInt

arr.sort((a, b) => { return a.item - b.item }); // sort arr based on the objects 'item' integer value from lowest to highest

for (let i = 0; i < arr.length; i++) {
    return arr[i]; // return each object indiviually 
    arr[i].num++; // increments the object's num
    if (arr[i].num != 0) {
        delete arr[i]; // delete the arr object if the num integer doesn't equate to 0
    }
} // for loop that distributes and deletes arr objects
