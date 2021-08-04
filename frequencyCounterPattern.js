const validAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false
    }
    let freq1 = {}
    let freq2 = {}
    for (let char of word1) {
        freq1[char] = (freq1[char] || 0) + 1
    }
    for (let char of word2) {
        freq2[char] = (freq2[char] || 0) + 1
    }
    for (let char in freq1) {
        if (freq2[char] === undefined)
            return false
        if (freq1[char] !== freq2[char])
            return false
    }
    return true
}

// console.log(validAnagram("", ""))
// console.log(validAnagram("qwerty", "ttrewq"))
// console.log(validAnagram("asd", "sda"))
// console.log(Math.floor(4/2))

function sameFrequency(first, second) {

    let firstObj = {}
    let secondObj = {}
    let firstString = first.toString();
    let secondString = second.toString();

    if (first.length !== second.length) return false

    for (let digit of firstString) {
        firstObj[digit] = (firstObj[digit] || 0) + 1;
    }

    for (let digit of secondString) {
        secondObj[digit] = (secondObj[digit] || 0) + 1;
    }

    for (let entry in firstObj) {
        if (!secondObj[entry]) return false
        if (secondObj[entry] !== firstObj[entry]) return false
    }

    return true

}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(22,222))
