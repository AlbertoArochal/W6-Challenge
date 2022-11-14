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

/*const neighborsMatrix = (axis) => {
    const neigh = [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; i++) {
            let xN = (axis + j + map.length) % map.length;
            let yN = (axis + i + map.length) % map.length;

            if (i != 0 || j != 0) {
                neigh.push(xN);
                neigh.push(yN);
            }
        }
    }
};

const mapRunner = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        array[i].forEach((cell) => callback(cell));
    }
};*/
