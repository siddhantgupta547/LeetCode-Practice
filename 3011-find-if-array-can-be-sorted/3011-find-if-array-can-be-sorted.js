/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let sorted=true
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-(1+i);j++){
            if(nums[j+1]<nums[j]){
                if(nums[j+1].toString(2).split('').filter(el => el === '1').length===nums[j].toString(2).split('').filter(el => el === '1').length){
                const temp=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
                }else{
                    sorted=false
                }
            }
        }
    }
    return sorted
};