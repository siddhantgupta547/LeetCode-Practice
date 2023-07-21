/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count=0;
    nums.forEach((Item,index)=>{
        if(Item===val){
           nums[index]= 200;
            count+=1;
        }
        
        
    })
    nums.sort((a,b)=>a-b);
    return nums.length-count;
};