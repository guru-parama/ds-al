function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (start <= end) {
        if (array[middle] === value) return middle ;
        if(value < array[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return -1;
}

// console.log(binarySearch([1, 2], 2))

console.log('a'>'b')