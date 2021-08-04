const merge = (arr1, arr2) => {
    let merged_array = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] <= arr2[pointer2]) {
            merged_array.push(arr1[pointer1]);
            pointer1++;
        } else {
            merged_array.push(arr2[pointer2]);
            pointer2++;
        }
    }
    if (pointer1 < arr1.length) {
        merged_array = merged_array.concat(arr1.slice(pointer1))
    }
    if (pointer2 < arr2.length) {
        merged_array = merged_array.concat(arr2.slice(pointer2))
    }
    return merged_array;
}

// console.log(merge([1,2,3,5,6],[2,3,4]))

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([34,23,12,65,45]))