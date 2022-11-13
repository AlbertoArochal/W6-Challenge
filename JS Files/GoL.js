/*const mapGenerator = (len) => {
    const map1 = [];
    for (let i = 0; i >= 9; i++) {
        let tempArray = Array.from({ length: 9 }, () =>
            Math.floor(Math.random() * 2)
        );
    }
};*/

const map = [];

const mapGenerator = (len) => {
    for (let i = 0; i < len; i++) {
        let temParray = Array.from({ length: len }, () =>
            Math.floor(Math.random() * 2)
        );
        map.push(temParray);
    }
    return map;
};

console.table(mapGenerator(6));

const DeadOrAlive = (position) => {};
