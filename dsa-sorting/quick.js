/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot() { }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr

    let pivot = arr[Math.floor(arr.length / 2)]
    const less = []
    const equal = []
    const greater = []

    for (let element of arr) {
        if (element < pivot) {
            less.push(element)
        } else if (element === pivot) {
            equal.push(element)
        } else {
            greater.push(element)
        }
    }

    return [...quickSort(less), ...equal, quickSort(greater)]
}

module.exports = quickSort;

// Time Complexity
// Best / Average Case:
// 𝑂(𝑛 log⁡ 𝑛)
// O(n log n)
// Worst Case:
// 𝑂(𝑛2)
// O(n2)(occurs when the pivot is poorly chosen)
// Space Complexity
// Average Case:
// 𝑂(log𝑛)
// O(logn) due to recursive function calls.