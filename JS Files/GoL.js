/* eslint-disable for-direction */

export const mapGenerator = (len) => {
    let map = [];
    for (let i = 0; i < len; i++) {
        let temParray = Array.from({ length: len }, () =>
            Math.floor(Math.random() * 2)
        );
        map.push(temParray);
    }
    return map;
};

//mapGenerator(3);

export const DoA = (array) => {
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

// export const neighbors = DoA(map);

export const segmentator = (scores, len) => {
    const newNeigh = [];
    let newRow = [];
    scores.forEach(function (score) {
        newRow.push(score);
        if (newRow.length === len) {
            newNeigh.push(newRow);
            newRow = [];
        }
    });
    return newNeigh;
};

export const newMapper = (array, neighbors) => {
    const newMap = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1 && neighbors[i][j] === 2) {
                newMap.push(1);
            }
            if (array[i][j] === 1 && neighbors[i][j] === 3) {
                newMap.push(1);
            }
            if (array[i][j] === 0 && neighbors[i][j] === 3) {
                newMap.push(1);
            }
            if (array[i][j] === 0 && neighbors[i][j] != 3) {
                newMap.push(0);
            }
            if (array[i][j] === 1 && neighbors[i][j] > 3) {
                newMap.push(0);
            }
            if (array[i][j] === 1 && neighbors[i][j] < 2) {
                newMap.push(0);
            }
        }
    }
    return newMap;
};

export const gameOfLife = (len) => {
    let repetitions = 0;
    let map = mapGenerator(len);
    console.table(map);
    const tempun = function (mapa) {
        mapa = map;
        let neighbors = DoA(map);
        let neighSeg = segmentator(neighbors, len);
        let newMap = newMapper(map, neighSeg);
        newMap = segmentator(newMap, len);
        map = newMap;
        console.table(newMap);
        repetitions++;
        return newMap;
    };
    if (repetitions < 10) {
        setInterval(tempun, 1000);
    }
};
/*
gameOfLife(20);
*/
