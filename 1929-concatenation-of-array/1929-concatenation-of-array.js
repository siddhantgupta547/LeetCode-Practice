/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const len=nums.length;
    for(let i=0;i<len;i++){
        nums[len+i]=nums[i];
    }
    return nums;
};