const naiveStringSearch = (str, searchStr) => {
    let count = 0;
    let pointer = 0;
    let searchPointer = 0;
    while (pointer < str.length) {
        if (searchPointer === searchStr.length - 1) {
            searchPointer = 0;
            count++;
        } 
        if (str[pointer] === searchStr[searchPointer]) {
            searchPointer++;
        }
        pointer++
    }
    return count;
}

console.log(naiveStringSearch('asdfasd', 'as'));