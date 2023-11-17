/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let i=0;j=nums.length-1; max=0;
    while(i<j){
        max=Math.max(max,nums[i]+nums[j]);
        i++;
        j--;
    }
    return max;
};