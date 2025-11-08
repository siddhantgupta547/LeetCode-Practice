/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const map=new Map()
    function recursive(nums,curr){
        if(curr>=nums.length){
            return 0
        }
        if(map.has(curr)){
            return map.get(curr)
        }
        const picked=nums[curr]+recursive(nums,curr+2)
        const notPicked=recursive(nums,curr+1)
        const max= Math.max(picked,notPicked)
        map.set(curr,max)
        return max
    }
    return recursive(nums,0)
};