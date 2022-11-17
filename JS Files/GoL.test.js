import {
    mapGenerator,
    DoA,
    segmentator,
    newMapper,
    gameOfLife,
} from "./GoL.js";

const mapSizes = [12, 5, 28, 10, 96];
const arraymap = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
];
let counter = 0;

const neighbors = [1, 2, 0, 2, 3, 0, 1, 2, 0];
const segmentNeigh = [
    [1, 2, 0],
    [2, 3, 0],
    [1, 2, 0],
];

const newArrayMap = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
];

describe(`Given len`, () => {
    describe("Receive number as length and number of items", () => {
        test(`Return number of cells`, () => {
            let size = mapGenerator(12);
            const result = size.length ** 2;
            const expected = 12 ** 2;
            expect(result).toBe(expected);
        });
    });
});

neighbors.forEach((element) => {
    describe(`Given ${arraymap}`, () => {
        describe("Receive array", () => {
            test(`Return return array`, () => {
                const result = neighbors[counter];
                const expected = DoA(arraymap);
                expect(result).toBe(expected[counter]);
            });
        });
    });
    counter++;
});
1;
describe(`Given ${neighbors}`, () => {
    describe("Receive array", () => {
        test(`Return return array of arrays`, () => {
            const result = segmentNeigh.length;
            const expected = segmentator(neighbors, 3);
            expect(result).toBe(expected.length);
        });
    });
});

describe(`Given ${neighbors} and ${arraymap}`, () => {
    describe("Receive 2 arrays", () => {
        test(`Return new array`, () => {
            const result = segmentator(newMapper(arraymap, segmentNeigh), 3);
            const expected = newArrayMap;
            expect(result[2][0]).toBe(expected[2][0]);
        });
        test(`Return new array`, () => {
            const result = segmentator(newMapper(arraymap, segmentNeigh), 3);
            const expected = newArrayMap;
            expect(result[1][1]).toBe(expected[1][1]);
        });
        test(`Return new array`, () => {
            const result = segmentator(newMapper(arraymap, segmentNeigh), 3);
            const expected = newArrayMap;
            expect(result[0][2]).toBe(expected[0][2]);
        });
        test(`Return new array`, () => {
            const result = segmentator(newMapper(arraymap, segmentNeigh), 3);
            const expected = newArrayMap;
            expect(result[1][2]).toBe(expected[1][2]);
        });
    });
});

describe(`Given number`, () => {
    describe("Receive array", () => {
        test(`Return return array of arrays`, () => {
            const result = gameOfLife(3);
            const expected = 3 ** 3;
            expect(result.length).toBe(expected);
        });
    });
});
