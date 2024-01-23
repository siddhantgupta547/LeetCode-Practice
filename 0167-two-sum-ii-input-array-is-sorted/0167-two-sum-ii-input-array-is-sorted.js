/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map= new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [(map.get(target-nums[i]))+1,i+1]
        }
        else{
            map.set(nums[i],i)
        }
    }
};