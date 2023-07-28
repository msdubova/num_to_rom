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

    test('Doubledigit nuumbers', () => {
        expect(numToRoms(21)).toBe('XXI');
        expect(numToRoms(22)).toBe('XXII');
        expect(numToRoms(33)).toBe('XXXIII');
        expect(numToRoms(44)).toBe('XLIV');
        expect(numToRoms(55)).toBe('LV');
        expect(numToRoms(66)).toBe('LXVI');
        expect(numToRoms(77)).toBe('LXXVII');
        expect(numToRoms(88)).toBe('LXXXVIII');
        expect(numToRoms(99)).toBe('XCIX');
    })

    test('Tripledigit numbers', () => {
        expect(numToRoms(100)).toBe('C');
        expect(numToRoms(111)).toBe('CXI');
        expect(numToRoms(222)).toBe('CCXXII');
        expect(numToRoms(333)).toBe('CCCXXXIII');
        expect(numToRoms(444)).toBe('CDXLIV');
        expect(numToRoms(555)).toBe('DLV');
        expect(numToRoms(666)).toBe('DCLXVI');
        expect(numToRoms(777)).toBe('DCCLXXVII');
        expect(numToRoms(888)).toBe('DCCCLXXXVIII');
        expect(numToRoms(999)).toBe('CMXCIX');
    })

    test('Random numbers', () => {
        expect(numToRoms(1)).toBe('I');
        expect(numToRoms(2)).toBe('II');
        expect(numToRoms(3)).toBe('III');
        expect(numToRoms(6)).toBe('VI');
        expect(numToRoms(7)).toBe('VII');
        expect(numToRoms(8)).toBe('VIII');
        expect(numToRoms(11)).toBe('XI');
        expect(numToRoms(15)).toBe('XV');
        expect(numToRoms(19)).toBe('XIX');
        expect(numToRoms(20)).toBe('XX');
        expect(numToRoms(30)).toBe('XXX');
        expect(numToRoms(55)).toBe('LV');
        expect(numToRoms(88)).toBe('LXXXVIII');
        expect(numToRoms(100)).toBe('C');
        expect(numToRoms(200)).toBe('CC');
        expect(numToRoms(300)).toBe('CCC');
        expect(numToRoms(400)).toBe('CD');
        expect(numToRoms(500)).toBe('D');
        expect(numToRoms(600)).toBe('DC');
        expect(numToRoms(700)).toBe('DCC');
        expect(numToRoms(800)).toBe('DCCC');
        expect(numToRoms(900)).toBe('CM');
        expect(numToRoms(10)).toBe('X');
        expect(numToRoms(25)).toBe('XXV');
        expect(numToRoms(39)).toBe('XXXIX');
        expect(numToRoms(44)).toBe('XLIV');
        expect(numToRoms(53)).toBe('LIII');
        expect(numToRoms(68)).toBe('LXVIII');
        expect(numToRoms(71)).toBe('LXXI');
        expect(numToRoms(89)).toBe('LXXXIX');
        expect(numToRoms(92)).toBe('XCII');
        expect(numToRoms(106)).toBe('CVI');
        expect(numToRoms(112)).toBe('CXII');
        expect(numToRoms(125)).toBe('CXXV');
        expect(numToRoms(139)).toBe('CXXXIX');
        expect(numToRoms(244)).toBe('CCXLIV');
        expect(numToRoms(377)).toBe('CCCLXXVII');
        expect(numToRoms(499)).toBe('CDXCIX');
        expect(numToRoms(533)).toBe('DXXXIII');
        expect(numToRoms(678)).toBe('DCLXXVIII');
        expect(numToRoms(725)).toBe('DCCXXV');
        expect(numToRoms(999)).toBe('CMXCIX');
        expect(numToRoms(1492)).toBe('MCDXCII');
        expect(numToRoms(2021)).toBe('MMXXI');
        expect(numToRoms(2500)).toBe('MMD');
        expect(numToRoms(3000)).toBe('MMM');

    })
})



// describe('num_to_rom', () => {
//   test('Converts Arabic numbers to Roman numbers', () => {
//     for (let num = 1; num <= 999; num++) {
//       const expected = numToRoms(num);
//       const result = numToRoms(num);
//       expect(result).toBe(expected);
//     }
//   });
// });

