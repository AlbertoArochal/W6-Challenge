/* eslint-disable for-direction */
export const map = [];

export const mapGenerator = (len) => {
    for (let i = 0; i < len; i++) {
        let temParray = Array.from({ length: len }, () =>
            Math.floor(Math.random() * 2)
        );
        map.push(temParray);
    }
    return map;
};

//console.table(mapGenerator(6));
mapGenerator(9);

const sumHorizontals = (array) => {
    let newArray = [];
    let arrayElements = [];
    for (let i = 0; i < array.length; i++) {
        arrayElements = [];
        for (let j = 0; j < array[i].length; j++) {
            let left = array[i][j - 1];
            left = left === undefined ? 0 : left;
            let up = array[i + 1];
            up = up === undefined ? 0 : array[i + 1][j];
            let down = array[i - 1];
            down = down === undefined ? 0 : array[i - 1][j];
            let right = array[i][j + 1];
            right = right === undefined ? 0 : right;
            arrayElements.push(left + right + up + down);
        }
        newArray.push(arrayElements);
    }
    console.log(newArray);
};

sumHorizontals(map);
