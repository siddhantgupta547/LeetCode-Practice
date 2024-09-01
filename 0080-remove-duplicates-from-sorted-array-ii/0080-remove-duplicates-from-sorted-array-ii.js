/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let repeatCount=1;
    let unique=0
    let current=1;
    while(current<nums.length){
        if(nums[current]!==nums[unique]){
            unique++
            nums[unique]=nums[current]
            current++
            repeatCount=1
        }else{
            if(repeatCount<2){
                repeatCount++
                unique++
                nums[unique]=nums[current]
            }
            current++
        }
    }
    return unique+1
};