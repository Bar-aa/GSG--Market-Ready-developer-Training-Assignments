/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let right = height.length-1;
    let left =0;
    let max =0;
    while (right!=left){
        max = Math.max(max, (right - left)*Math.min(height[left], height[right]));
        if (height[left]<height[right]){
            left++;
        }
        else {
            right--;
        }
    }
    return max;
};
