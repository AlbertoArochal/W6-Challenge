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

mapGenerator(9);

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
    return newMap;
};

console.log(DoA(map));
