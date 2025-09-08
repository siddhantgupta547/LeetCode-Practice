/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left=0
    let right=nums.length-1
    const last=nums[nums.length-1]
    let poi=-1
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
    if(poi===-1){
        return nums[0]
    }else{
        return nums[poi+1]
    }

};