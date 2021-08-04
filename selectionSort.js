const selectionSort = arr => {
    for (i = 0; i < arr.length; i++) {
        let min = i;
        for (j = i; j < arr.length - 1; j++) {
            if (arr[min] > arr[j + 1]) {
                min = j + 1
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    console.log(arr)
}

selectionSort([2,5,1,6,6,7,3]);