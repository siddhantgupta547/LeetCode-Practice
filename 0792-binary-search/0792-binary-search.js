/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(nums,target,left,right){
        if(right<left){
            return -1
        }
        const mid=left+Math.floor(right-left/2)
        const item=nums[mid]
        if(item===target){
            return mid
        }else if(item>target){
            return binarySearch(nums,target,left,mid-1)
        }else{
            return binarySearch(nums,target,mid+1,right)
        }
    }
    return binarySearch(nums,target,0,nums.length-1)
};