/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0
    let right=nums.length-1
    let result=-1
    let poi=-1
    let found=false
    const last=nums[nums.length-1]
    while(left<=right){
        const mid=left+Math.floor((right-left)/2)
        const item=nums[mid]
        if(item>last){
            poi=mid
            left=mid+1
        }else{
            right=mid-1
        }
    }
    if(poi!==-1){
        const item=nums[poi]
        if(item>target){
            if(target>last){
                right=poi
                left=0
            }else{
                left=poi+1
                right=nums.length-1
            }
        }else{
            right=poi
            left=0
        }
    }else{
        left=0
        right=nums.length-1
    }
        while(left<=right){
        const mid=left+Math.floor((right-left)/2)
        const item=nums[mid]
        if(item===target){
            result=mid
            break
        }else if(item<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return result
};