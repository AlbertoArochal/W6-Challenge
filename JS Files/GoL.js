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

//mapRunner(map, neighborsMatrix);

const tostringe = (array) => {
    for (let i = 0; i <= array.length; i++) {
        try {
            console.log(array[i].toString());
        } catch (error) {
            i++;
        } finally {
            continue;
        }
    }
};

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

const DoA = (array) => {
    console.table(map);
    const newMap = [];
    let cellvalue = [];
    let cumulator = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = -1; k < 2; k++) {
                let errorcount = 0;
                try {
                    cumulator.push(array[i + k][j]);
                    errorcount = 0;
                } catch {
                    errorcount++;
                } finally {
                    if (errorcount === 0) {
                        cumulator.push(
                            array[i + k][j - 1] === undefined
                                ? 0
                                : array[i + k][j - 1]
                        );
                        cumulator.push(
                            array[i + k][j + 1] === undefined
                                ? 0
                                : array[i + k][j + 1]
                        );
                    }
                    continue;
                }
            }
            cellvalue.push(
                cumulator.reduce((partialSum, a) => partialSum + a, 0) -
                    array[i][j]
            );
            cumulator = [];
            newMap.push(cellvalue);
            cellvalue = [];
        }
    }
    console.log(newMap);
    console.log(newMap.length);
};

DoA(map);
