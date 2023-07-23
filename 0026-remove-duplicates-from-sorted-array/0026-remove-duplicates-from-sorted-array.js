/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0,j=1,k=0;
    while(i<j && j<nums.length){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
            k++;
        }
        j++;
    }
    return k+1;
    
};