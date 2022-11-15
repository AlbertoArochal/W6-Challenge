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

export const DoA = (array) => {
    console.table(map);
    const newMap = [];
    let cellvalue = [];
    let cumulator = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = -1; k < 2; k++) {
                let errorcount = 0;
                try {
                    cumulator += array[i + k][j];
                } catch {
                    errorcount++;
                } finally {
                    if (errorcount === 0) {
                        cumulator +=
                            array[i + k][j - 1] === undefined
                                ? 0
                                : array[i + k][j - 1];
                        cumulator +=
                            array[i + k][j + 1] === undefined
                                ? 0
                                : array[i + k][j + 1];
                    }
                }
            }
            cellvalue.push(cumulator - array[i][j]);
            cumulator = 0;
            newMap.push(cellvalue);
        }
    }
    return newMap[0];
};

export const neighbors = DoA(map);

export const segmentator = (scores) => {
    const newNeigh = [];
    let newRow = [];
    scores.forEach(function (score) {
        newRow.push(score);
        if (newRow.length === 9) {
            newNeigh.push(newRow);
            newRow = [];
        }
    });
    return newNeigh;
};

const newMapper = (array, neighbors) => {
    const newMap = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (
                (array[i][j] === 1 && neighbors === 2) ||
                (array[i][j] === 1 && neighbors === 3) ||
                (array[i][j] === 0 && neighbors[i][j] === 3)
            ) {
                newMap.push(1);
            }
            newMap.push(0);
        }
    }
    return newMap;
};

const neighSeg = segmentator(neighbors);

console.table(neighSeg);

console.table(segmentator(newMapper(map, neighSeg)));
