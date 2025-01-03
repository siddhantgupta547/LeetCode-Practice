/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (nums, start, end) => {
    while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
	}
}
var rotate = function(nums, k) {
    k %= nums.length 
    reverse(nums, 0, nums.length -1)
    reverse(nums, 0, k -1)
    reverse(nums, k, nums.length -1)
};