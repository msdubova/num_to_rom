import { numToRoms, LIBRARY } from "./main";

describe('num_to_rom', () => {
 


    const keys = Object.keys(LIBRARY);
    const values = Object.values(LIBRARY);

    keys.forEach(key => test(`${key} to ${LIBRARY[key]}`, () => {
        expect(numToRoms(key + '')).toBe(LIBRARY[key])
    }))


})