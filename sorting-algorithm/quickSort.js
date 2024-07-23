function pivot (arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    let swapIdx = start
    for(let i=start+1; i<=end; i++){
        if (pivot > arr[i]) {
            swapIdx++;
            if (i != swapIdx) [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
    return swapIdx
}

function quickSort (arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([3,8,5,2,9,0,4]))

/*
Time Complexity
 - best & avergae case: O(n log n)
 - worst case: O(n^2)

Space Complexity - O(log n)
*/