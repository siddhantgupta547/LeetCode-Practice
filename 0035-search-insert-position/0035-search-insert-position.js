/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let greater;
    let less;
    function recursiveBinarySearch(nums, target, left, right) {
        const mid = left+Math.floor(right-left/2)
        if(right<left){
            return -1
        }

        let result;
        if (target === nums[mid]) {
            result = mid
        } else if (target < nums[mid]) {
            greater=mid
           result = recursiveBinarySearch(nums,target,left,mid-1)
        } else {
            less=mid
            result = recursiveBinarySearch(nums,target,mid+1,right)
        }
        return result
    }
    const result= recursiveBinarySearch(nums,target,0,nums.length-1)
    if(result===-1){
        if(less!==undefined && greater!==undefined){
            return greater
        }else if(less!==undefined){
            return less+1
        }else if(greater!==undefined){
            return greater
        }else{
            return -1
        }
    }else{
        return result
    }
};