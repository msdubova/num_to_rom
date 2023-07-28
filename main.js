export const LIBRARY = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

export function numToRoms(num) {
    if (num <= 0) {
        throw new Error("Zero is not a roman number.");
    }

    if (num > 3000) {
        throw new Error("Numbers greater than 3000 are not supported.");
    }

    function isInLibrary(number) {
        if (LIBRARY[number]) {
            return LIBRARY[number];
        } else {
            return convertNumber(number);
        }
    }

    function convertProperNumberOfNumber(number, scale, acc, exception) {
        if (LIBRARY[number * scale]) {
            return LIBRARY[number * scale]
        }
        let result = '';
        for (let i = 0; i < number; i++) {
            result = result + acc;
        }
        if (number >= 5) {
            result = exception + result.slice(5)
        }
        return result;
    }

    function numberToArray(number) {
        return Array.from(number.toString(), Number)
    }

    function convertNumber(number) {
        const numArray = numberToArray(number);
        if (numArray.length === 1) {
            return convertProperNumberOfNumber(numArray[0], 1, 'I', 'V');
        } else if (numArray.length === 2) {
            return `${convertProperNumberOfNumber(numArray[0], 10, 'X', 'L')}${convertProperNumberOfNumber(numArray[1], 1, 'I', 'V')}`;
        } else if (numArray.length === 3) {
            return `${convertProperNumberOfNumber(numArray[0], 100, 'C', 'D')}${convertProperNumberOfNumber(numArray[1], 10, 'X', 'L')}${convertProperNumberOfNumber(numArray[2], 1, 'I', 'V')}`;
        } else if (numArray.length === 4) {
            return `${convertProperNumberOfNumber(numArray[0], 1000, 'M', 'Err')}${convertProperNumberOfNumber(numArray[1], 100, 'C', 'D')}${convertProperNumberOfNumber(numArray[2], 10, 'X', 'L')}${convertProperNumberOfNumber(numArray[3], 1, 'I', 'V')}`;
        }
    }

    return isInLibrary(num);
}

console.log(numToRoms(401));
