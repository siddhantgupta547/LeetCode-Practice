/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first=-1
    let last=-1
    let found=false
    function binarySearch(nums,target,left,right){
        if(right<left){
            return -1
        }
        const mid=left+Math.floor(right-left/2)
        let item=nums[mid]
        if(found && item!==target){
            return
        }
        if(item===target){
            if(first-1 &&last ==-1){
                first=last=mid
                found=true
            }else if(mid<=first){
                first=mid
            }else{
                last=mid
            }
        }
        if(found){
            binarySearch(nums,target,mid+1,right)
            binarySearch(nums,target,left,mid-1) 
        }else{
            if(item>target){
                binarySearch(nums,target,left,mid-1) 
            }else{
                binarySearch(nums,target,mid+1,right)
            }
        }
    }
    binarySearch(nums,target,0,nums.length-1)
    return [first,last]
};