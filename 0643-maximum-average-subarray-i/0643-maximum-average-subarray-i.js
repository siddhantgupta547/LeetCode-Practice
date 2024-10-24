/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;
    for(let i=0;i<k;i++){
        windowSum += nums[i];
    }
    let currentSum = windowSum;
    for(let i=k;i<nums.length;i++){
        currentSum = currentSum + nums[i] - nums[i-k];
        if(currentSum > windowSum){
             windowSum = currentSum;
        }
    }
    return windowSum/k;
};