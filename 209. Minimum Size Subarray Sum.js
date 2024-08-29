/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minlength=Infinity
    let start =0
    let end=0
    let sum =0
    for (;end<nums.length;end++){
        sum+=nums[end]
        while(sum>=target){
            minlength=end-start+1<minlength?end-start+1:minlength
            sum-=nums[start]
            start++
        } 
    }
    return minlength == Infinity?0:minlength
};
