export const LIBRARY = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    100: 'C',
    500: 'D',
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

    function convertSingleDigitNumbers(number) {
        if (LIBRARY[number]) {
            return LIBRARY[number]
        }
        let result = '';

        for (let i = 0; i < number; i++) {
            result = result + 'I';
        }

        if (number > 5) {
            result = 'V' + result.slice(5)
        }

        return result;
    }

    function convertDoubleDigitNumbers(number) {
        
        let result = '';

        for (let i = 0; i < number; i++) {
            result = result + 'X'
        }

        return result;
    }

    function numberToArray(number) {
        return Array.from(number.toString(), Number)
    }

    function convertNumber(number) {
        const numArray = numberToArray(number);
        if (numArray.length === 1) {
            // Single-digit number
            // Logic for single-digit numbers   

            return convertSingleDigitNumbers(numArray[0]);
        } else if (numArray.length === 2) {
            // // Two-digit number
            // // Logic for two-digit numbers
            // return convertSingleDigitNumbers(numArray);
            return `${convertDoubleDigitNumbers(numArray[0])}${convertSingleDigitNumbers(numArray[1])}`;
        } else if (numArray.length === 3) {
            // Three-digit number
            // Logic for three-digit numbers
            return `Первое число + Второе число + ${convertSingleDigitNumbers(numArray[1])}`;
        } else {
            // If the number has more than three digits, return an empty string or any other value of your choice.
            return '';
        }
    }

    return isInLibrary(num);
}




console.log(numToRoms(25)); // 'CXXX'