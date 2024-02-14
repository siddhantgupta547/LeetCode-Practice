/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let result=[];
    let place=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            result[place]=nums[i];
            place+=2
        }
    }
    place=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            result[place]=nums[i];
            place+=2
        }
    }
    return result;
};