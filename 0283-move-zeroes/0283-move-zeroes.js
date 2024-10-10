/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j=0
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let temp=nums[i]
            nums[j]=temp
            j++
        }else{
            count++
        }
    }
    j=nums.length-1
    while(count>0){
        nums[j]=0
        j--
        count--
    }
    return nums
};