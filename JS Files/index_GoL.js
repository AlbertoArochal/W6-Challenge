import { mapGenerator, DoA, segmentator, newMapper, neighSeg } from "./GoL.js";

const GameOfLife = (len) => {
    let map = mapGenerator(len);
    console.table(map);
    let neighbors = DoA(map);
    let segMap = segmentator(neighbors);
    let newMap = segmentator(newMapper(segMap, map));
    return console.table(newMap);
};

GameOfLife(20);
