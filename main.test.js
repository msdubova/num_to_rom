import { numToRoms, LIBRARY } from "./main";

describe('num_to_rom', () => {

    const keys = Object.keys(LIBRARY);
    const values = Object.values(LIBRARY);

    keys.forEach(key => test(`${key} to ${LIBRARY[key]}`, () => {
        expect(numToRoms(key + '')).toBe(LIBRARY[key])
    }))

    // const check_15 = 15;
    // Array.from(check_15.toString(), Number).forEach(item => test(`${item} to rom`, () => {
    //     expect(numToRoms(item)).toBe()
    // } ))
    test('One-digit non-library', () => {
        expect(numToRoms(2)).toBe('II');
        expect(numToRoms(3)).toBe('III');
        expect(numToRoms(6)).toBe('VI');
        expect(numToRoms(7)).toBe('VII');
        expect(numToRoms(8)).toBe('VIII');
    })
})
