// export const LIBRARY = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M'
// }
// export function numToRoms(num) {
//     switch (num) {
//         case num === 1:
//             return LIBRARY[num]
//         case num === 5:
//             return LIBRARY[num]
//         case num <= 10:
//             num
//         case num <= 50:
//         case num <= 100:
//         case num <= 500:
//         case num <= 1000:
//         case num <= 10:
//     }


//     const numbers = Array.from(num);



// };

// export const LIBRARY = {
//     1: 'I',
//     5: 'V',
//     10: 'X',
//     50: 'L',
//     100: 'C',
//     500: 'D',
//     1000: 'M'
// };

// export function numToRoms(num) {
//     if (num <= 0) {
//         throw new Error("Zero is not rom number");
//     }

//     if (num > 3000) {
//         throw new Error("3000 is max");
//     }



//     if (Object.keys(LIBRARY).includes(num)) {
//         return LIBRARY[num]
//     }


//     const numArray = Array.from(num.toString(), Number);
//     console.log(numArray);
//     numArray.map(element, index => {
//         if (index === 0) {

//         } else if (index === 1) {

//         } else if (index === 2) {

//         } else {

//         }
//     })

// }
// numToRoms(130);

export const LIBRARY = {
    1: 'I',
    5: 'V',
    10: 'X',
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

    if (Object.keys(LIBRARY).includes(num)) {
        return LIBRARY[num]
    }

    const numArray = Array.from(num.toString(), Number);


    if (numArray.length === 1) {
        // Однозначное число
        // Логика для однозначных чисел
        // Например:
        return LIBRARY[num];
    } else if (numArray.length === 2) {
        // Двухзначное число
        // Логика для двухзначных чисел
        // Например:
        const tensPlace = LIBRARY[numArray[0] * 10];
        const onesPlace = LIBRARY[numArray[1]];
        return tensPlace + onesPlace;
    } else if (numArray.length === 3) {
        // Трехзначное число
        // Логика для трехзначных чисел
        // Например:
        const hundredsPlace = LIBRARY[numArray[0] * 100];
        const tensPlace = LIBRARY[numArray[1] * 10];
        const onesPlace = LIBRARY[numArray[2]];
        return hundredsPlace + tensPlace + onesPlace;
    } else {
        // Если число имеет более чем три цифры, вернуть пустую строку или другое значение по вашему выбору.
        return '';
    }
}

console.log(numToRoms(130)); // 'CXXX'