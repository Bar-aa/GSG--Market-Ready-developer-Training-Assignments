/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let flag=nums[0];
    let k =1;
    for (let i=1;i<nums.length;i++){
        if (nums[i]!==flag){
            nums[k]=nums[i];
            flag=nums[i];
            k++;
        }
    }
    return k;
};
