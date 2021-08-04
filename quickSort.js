const quickSort = arr2Sort => {
    const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
        const swap = (array, i, j) => {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        let pivotElem = arr[start];
        let swapIdx = start;
        for (let i = start + 1; i <= end; i++) {
            if (pivotElem > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i)
            }
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    }

    pivotHelper(arr2Sort)
}