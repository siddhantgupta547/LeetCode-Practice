/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set=new Set();
    let dup=0
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i]))
            dup=nums[i]
        else
            set.add(nums[i])
    }
    for(let i=1;i<=nums.length;i++){
        if(!(set.has(i)))
            return [dup,i];
    }   
};