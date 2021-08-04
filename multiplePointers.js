function countUniqueValues(inputArray) {
    let pointer_1 = 0;
    let pointer_2 = 1;
    if (inputArray.length == 0) return 0
    if (inputArray.length == 1) return 1
    while (pointer_2 < inputArray.length) {
        if (inputArray[pointer_1] !== inputArray[pointer_2]) {
            pointer_1++;
            inputArray[pointer_1] = inputArray[pointer_2];
        }
        pointer_2++;
    }
    return (pointer_1 + 1)
}

// console.log(countUniqueValues([]))

function isSubsequence(inputCheckSeq, inputStr) {
    let pointer = 0;
    let checkValue = 0;
    while (pointer < inputStr.length) {
        if (checkValue === inputCheckSeq.length - 1) return true;
        if (inputStr[pointer] === inputCheckSeq[checkValue])
            checkValue++;
        pointer++;
    }
    return false;
}

console.log(isSubsequence('abc', 'acb'))
