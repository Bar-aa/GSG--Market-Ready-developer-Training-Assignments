/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function(arr, k) {
    let missingCount = 0;
    let currentNum = 1;
    let i = 0;
    
    while (true) {
        // Check if the current number is in the array
        if (i < arr.length && arr[i] === currentNum) {
            i++;  // Move to the next element in the array
        } else {
            missingCount++;  // Increment the count of missing numbers
        }
        
        // If we've found the kth missing number, return it
        if (missingCount === k) {
            return currentNum;
        }
        
        currentNum++;  // Move to the next number
    }
    /*for (let i=1,j=0;i<arr[arr.size-1]+k;i++){
        if (i!=arr[i-1]){
            if (j==k){
                return arr[i];
                break;
            }
            j++;
        }
    }*/
};
