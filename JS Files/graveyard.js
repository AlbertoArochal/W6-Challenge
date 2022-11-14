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

/*const arrayprueba = [1, 2, 3, 4, 5, undefined, null, 6, 38];
tostringe(arrayprueba);*/

/*const DoA = (array) => {
    let cellvalue = [
        array[i + 1][j + 1],
        array[i + 1][j],
        array[i + 1][j - 1],
        array[i][j + 1],
        array[i][j - 1],
        array[i - 1][j - 1],
        array[i - 1][j + 1],
    ];
    let newArray = [];
    let newElements = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i]; j++) {
            for (let element = 0; element <= cellvalue.length; element++) {
                try {
                    return console.log(cellvalue[element]);
                } catch (error) {
                    element++;
                    console.log("ha habido un error");
                } finally {
                    continue;
                }
            }
        }
    }
};
*/

/*const DoA = (array) => {
    let cellvalue = [];
    let cumulator = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = -1; k < 2; k++) {
                try {
                    cumulator.push(array[i + k][j]);
                    try {
                        cumulator.push(
                            array[i + k][j + k] === undefined
                                ? 0
                                : array[i + k][j + k]
                        );
                    } catch (error) {
                        console.log("there was an error");
                    } finally {
                        continue;
                    }
                } catch (error) {
                    k++;
                } finally {
                    if (cumulator.length === 8) {
                        if (
                            cumulator.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                            ) === 3
                        ) {
                            cellvalue.push(1);
                        }
                        if (
                            cumulator.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                            ) > 3
                        ) {
                            cellvalue.push(0);
                        }
                        if (
                            cumulator.reduce(
                                (partialSum, a) => partialSum + a,
                                0
                            ) < 3
                        ) {
                            cellvalue.push(0);
                        }
                        cumulator = [];
                    }
                    continue;
                }
            }
        }
    }
    console.log(cellvalue);
};*/
