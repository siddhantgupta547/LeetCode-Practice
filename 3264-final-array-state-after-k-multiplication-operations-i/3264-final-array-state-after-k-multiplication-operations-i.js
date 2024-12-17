/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
for(let i=0;i<k;i++){
        let min=Number.MAX_SAFE_INTEGER
        let ix=-1
        nums.forEach((item,index)=>{
         if(item<min){
            min=item;
            ix=index
         }
        })
        nums[ix]=min*multiplier
    }
    return nums
};