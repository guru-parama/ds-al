const getMaxDigitCount = arr => {
    let maxdigit = 1;
    for (let i = 0; i < arr.length; i++) {
        maxdigit = Math.max(maxdigit, Math.floor(Math.log10(Math.abs(arr[i])) + 1))
    }
    return maxdigit
}

// console.log(getMaxDigitCount([1, 456, 23, 7777]))

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(45,3))

const radixSort = arr => {
    for (let i = 0; i < getMaxDigitCount(arr); i++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            let bucketNum = getDigit(arr[j], i);
            digitBuckets[bucketNum].push(arr[j])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}

console.log(radixSort([21, 30, 455, 851, 54654, 5121, 5485456]))