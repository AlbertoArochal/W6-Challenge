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

const neighborsMatrix = (axis) => {
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
};

//console.table(mapGenerator(6));
mapGenerator(9);

mapRunner(map, neighborsMatrix);
