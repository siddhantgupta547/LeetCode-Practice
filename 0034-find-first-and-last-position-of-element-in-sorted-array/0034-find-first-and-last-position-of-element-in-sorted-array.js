/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first=-1
    let last=-1
    function binarySearch(nums,target,left,right){
        if(right<left){
            return -1
        }
        const mid=left+Math.floor(right-left/2)
        let item=nums[mid]
        if(item===target){
            if(first-1 &&last ==-1){
                first=last=mid
            }else if(mid<=first){
                first=mid
            }else{
                last=mid
            }
        }
        binarySearch(nums,target,mid+1,right)
        binarySearch(nums,target,left,mid-1) 
    }
    binarySearch(nums,target,0,nums.length-1)
    return [first,last]
};