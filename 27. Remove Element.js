/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;  // Pointer to track the position for non-val elements
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];  // Move the element to the position of k
            k++;  // Increment k for the next valid element
        }
    }
    
    return k;  // Return the count of non-val elements
};
