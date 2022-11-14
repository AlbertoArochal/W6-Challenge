import { mapGenerator } from "./GoL";

const mapSizes = [12, 5, 28, 10, 96];

mapSizes.forEach((element) =>
    describe(`Given {napSizes.element}`, () => {
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
