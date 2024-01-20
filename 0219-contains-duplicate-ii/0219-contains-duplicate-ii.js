/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const existing=new Set();
    for(let i=0;i<=k && i<nums.length;i++){
        if(existing.has(nums[i])){
            return true;
        }
        existing.add(nums[i]);
    }
    for(let i=k+1;i<nums.length;i++){
        existing.delete(nums[i-(k+1)]);
        if(existing.has(nums[i]))
            return true;
        existing.add(nums[i])
    }
    return false;
};