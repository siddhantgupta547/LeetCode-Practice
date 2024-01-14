/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const frequency={}
   for(let index=0;index<nums.length;index++){
       if((target-nums[index]) in frequency){
           return [index,frequency[target-nums[index]]]
       }
       else{
           frequency[nums[index]]=index;
       }
   }
    console.debug(frequency)
};