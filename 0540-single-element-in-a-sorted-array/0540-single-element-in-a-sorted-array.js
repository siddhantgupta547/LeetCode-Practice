/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let xor=nums[0]
    for(let idx=1;idx<nums.length;idx++){
        xor=xor^nums[idx]
    }
    return xor
};