/*const sumHorizontals = (array) => {
    let newArray = [];
    let arrayElements = [];
    for (let i = 0; i < array.length; i++) {
        arrayElements = [];
        for (let j = 0; j < array[i].length; j++) {
            let left = array[i][j - 1] === undefined ? 0 : array[i][j - 1];
            let up = array[i + 1] === undefined ? 0 : array[i + 1][j];
            let down = array[i - 1] === undefined ? 0 : array[i - 1][j];
            let right = array[i][j + 1] === undefined ? 0 : array[i][j + 1];
            arrayElements.push(left + right + up + down + upR);
        }
        newArray.push(arrayElements);
    }
    return newArray;
};*/

/*const DoA = (array) => {
    let newArray = [];
    let newElements = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i]; j++) {
            newElements = [];
            while (i > 0 && i < array.length) {
                while (j > 0 && j < length) {
                    let cellvalue =
                        array[i + 1][j + 1] +
                        array[i + 1][j] +
                        array[i + 1][j - 1] +
                        array[i][j + 1] +
                        array[i][j - 1] +
                        array[i - 1][j - 1] +
                        array[i - 1][j + 1];
                    newElements.push(cellvalue);
                }
            }
            newArray.push[newElements];
        }
    }
    return newArray;
};*/
