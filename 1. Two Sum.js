
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Two Sum.js V1.0
 //O(n^2)
var twoSumv2 = function(nums, target) {
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length;j++){
            if (i!=j && nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Two Sum.js V2.0
 //O(n)
var twoSumv2 = function(nums, target) {
    let map = new Map();
    for (let i=0;i<nums.length;i++){
       let compl=target-nums[i];
       if (map.has(compl)){
        return [map.get(compl),i];
       }
       else{
        map.set(nums[i],i);
       }

    }
};
