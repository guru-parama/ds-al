function bubbleSort(arr) {
    for (let i = arr.length; i > 0 ; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr[j], arr[j+1])
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr)
}

bubbleSort([5, 1, 2, 3, 9, 6])