function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j = i
        while(j>0 && arr[j-1] > arr[j]) {
            [arr[j-1], arr[j]] = [arr[j],arr[j-1]]
            j--
        }
    }
    return arr
}

console.log(insertionSort([10,4,2,5,8]))

/*
Time Complexity
 - best case : O(n)
 - average & worst case : O(n^2)

Space Complexity : O(1)
*/