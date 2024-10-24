/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
     let kSum = 0;
    for(let i=0;i<k;i++){
        kSum += nums[i];
    }
    let windowSum = kSum;
    for(let i=0;i<nums.length;i++){
        windowSum = windowSum + nums[i+k] - nums[i];
        if(windowSum > kSum){
             kSum = windowSum;
        }
    }
    return kSum/k;
};