/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const sumOfSubArrays=[]
    let output=0
    for(let i=0;i<n;i++){
        let prev=0
        for(let j=i;j<n;j++){
            prev+=nums[j]
            sumOfSubArrays.push(prev)
        }
    }
    sumOfSubArrays.sort((a,b)=>a-b)
    while(left<=right){
        output+=sumOfSubArrays[left-1]
        left++
    }
    return output% (10**9 + 7)
};