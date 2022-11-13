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

const DoA = (array) => {
    array.map(function (list) {
        list.forEach(function (element) {
            let right = list[list.indexOf(element) - 1];
            let left = list[list.indexOf(element) + 1];
            if (!right === undefined && !left === undefined) {
                element = right + left;
            }
        });
        console.table(list);
    });
};

DoA(map);
