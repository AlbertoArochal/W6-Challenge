import { mapGenerator, DoA, segmentator } from "./GoL";

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

let rows = 0;
let units = 0;

mapSizes.forEach((element) =>
    describe(`Given ${mapSizes.element}`, () => {
        describe("Receive number as length and number of items", () => {
            test(`Return number of cells`, () => {
                let size = mapGenerator(mapSizes[element]);
                const result = size ** 2;
                const expected = mapSizes[element] ** 2;
                expect(result).toBe(expected);
            });
        });
    })
);

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

describe(`Given ${neighbors}`, () => {
    describe("Receive array", () => {
        test(`Return return array of arrays`, () => {
            const result = segmentNeigh.length;
            const expected = segmentator(neighbors, 3);
            expect(result).toBe(expected.length);
        });
    });
});
