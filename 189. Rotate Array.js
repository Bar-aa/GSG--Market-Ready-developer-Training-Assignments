var rotate = function(nums, k) {
    k = k % nums.length;  // Handle cases where k is greater than the length of nums

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the rest of the array
    reverse(nums, k, nums.length - 1);
};

// Two-pointer reverse function
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
