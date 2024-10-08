/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length<3){
        return false
    }
    let min=Number.MAX_SAFE_INTEGER
    let current=Number.MAX_SAFE_INTEGER
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min=nums[i]
            continue
        }
        if(nums[i]>min && nums[i]<current){
            current=nums[i]
            continue
        }
        if(nums[i]>current && nums[i]>min){
            return true
        }
    }
    return false
};

