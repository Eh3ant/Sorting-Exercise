function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentVal;
    }
    return arr


}

module.exports = insertionSort;


// Time Complexity
// Best case:
// O(n)(already sorted array)
// Worst case:
// O(n2)(reverse sorted array)
// Average case:
// O(n2)
